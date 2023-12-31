
var Lightbox = function(elem) {
    this.trigger = elem;
    this.el = document.querySelector('.lightbox');
    this.body = document.querySelector('.lightbox .body');
    this.content = document.querySelector('.lightbox .content');
    this.type = elem.getAttribute('lightbox');
    this.text = elem.getAttribute('video-text');
    this.title = elem.getAttribute('video-title');
    this.id = elem.getAttribute('video-id');
    this.hash = elem.getAttribute('video-hash');
    this.href = elem.getAttribute('url') || elem.getAttribute('href');
    this.image = null;
    this.video = null;
    this.init();
}

Lightbox.prototype.init = function() {
    var _this = this;

    if (!this.el)
        this.create();

    this.trigger.addEventListener('click', function(e) {
        e.preventDefault();
        _this.open();
    });
}

Lightbox.prototype.create = function() {
    var _this = this,
        cl = document.createElement('div'), // close
        bd = document.createElement('div'); // backdrop

    this.el = document.createElement('div');
    this.content = document.createElement('div');
    this.body = document.createElement('div');

    this.el.classList.add('lightbox');
    bd.classList.add('backdrop');
    cl.classList.add('close');
    this.content.classList.add('content');
    this.body.classList.add('body');

    cl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"></path></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path></g></g></svg>';

    this.el.appendChild(bd);
    this.content.appendChild(cl);
    this.content.appendChild(this.body);
    this.el.appendChild(this.content);
    document.body.appendChild(this.el);

    cl.addEventListener('click', function() {
        _this.close();
    });

    bd.addEventListener('click', function() {
        _this.close();
    });

    var f = function(e) {
        if (_this.isOpen()) return;
        _this.el.classList.remove('show');
        _this.body.innerHTML = '';
    }

    this.el.addEventListener('transitionend', f, false);
    this.el.addEventListener('webkitTransitionEnd', f, false);
    this.el.addEventListener('mozTransitionEnd', f, false);
    this.el.addEventListener('msTransitionEnd', f, false);
}

Lightbox.prototype.loadImage = function() {
    var _this = this;

    this.setDimensions(this.width, this.height);

    if (!this.image) {
        this.image = new Image();

        this.image.addEventListener('load', function() {
            var dim = _this.fitToSize(this.naturalWidth, this.naturalHeight, _this.width, _this.height);
            _this.setDimensions(dim.width, dim.height);
        });

        this.image.src = this.href;
    }

    this.body.appendChild(this.image);
}

Lightbox.prototype.loadVideo = function() {
    var _this = this;
    this.setDimensions(this.width, this.height);

    if (!this.video) {
        this.video = document.createElement('video');
        this.video.addEventListener('loadedmetadata', function() {
            var dim = _this.fitToSize(this.videoWidth, this.videoHeight, _this.width, _this.height);
            _this.setDimensions(dim.width, dim.height);
        });
        this.video.src = this.href;
        this.video.autoplay = true;
        this.video.controls = true;
    }

    this.body.appendChild(this.video);
}

Lightbox.prototype.loadIframe = function() {
    this.setDimensions(this.width, this.height);
    this.body.innerHTML = '<iframe src="https://player.vimeo.com/video/' + this.id + '?h=' + this.hash + '&autoplay=1&color=000000&title=0&byline=0&portrait=0&progress_bar=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>' + '<h2>' + this.title + '</h2>' + '<p>' + this.text + '</p>';
}

Lightbox.prototype.open = function() {
    switch(this.type) {
        case 'image':
            this.loadImage();
            break;
        case 'video':
            this.loadVideo();
            break;
        default:
            this.loadIframe();
    }

    this.el.classList.add('show');
    this.el.offsetHeight; // force render
    this.el.classList.add('open');
}

Lightbox.prototype.close = function() {
    this.el.classList.remove('open');
}

Lightbox.prototype.isOpen = function() {
    return this.el.classList.contains('open');
}

Lightbox.prototype.setDimensions = function(w, h) {
    this.width = w;
    this.height = h;
    this.content.style.width = w + 'px';
    this.content.style.height = h + 'px';
}

Lightbox.prototype.fitToSize = function(w, h, maxW, maxH) {
    var r = h / w;

    if(w >= maxW && r <= 1){
        w = maxW;
        h = w * r;
    } else if(h >= maxH) {
        h = maxH;
        w = h / r;
    }

    return {
        width: w,
        height: h,
    }
}
