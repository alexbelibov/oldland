class SearchModal {
    constructor(btn) {
        this.btn = btn;
        this.modal = document.getElementById(btn.dataset.target);
        this.dismiss = this.modal.querySelector('[data-dismiss="modal"]');
        this.search = this.modal.querySelector('.search-input');
        this.tags = this.modal.querySelectorAll('.tag');
        this.content = this.modal.querySelector('.content');
        this.backBtn = this.modal.querySelector('.back');
        this.selectedTag = this.modal.querySelector('.selected-tag');
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.btn.addEventListener('click', () => {
            this.toggle();
        });

        this.dismiss.addEventListener('click', () => {
            this.close();
        });

        document.body.addEventListener('keyup', event => {
            //  If keyboard shortcut is ctrl + s
            if (event.ctrlKey && event.which === 83) {
                this.toggle();
            }
            if (event.which === 27) {
                this.close();
            }
        });

        this.tags.forEach(tag => {
            tag.addEventListener('click', event => {
                let tagText = tag.textContent;
                this.content.classList.contains('show-tag-results') ? this.hideTagResults() : this.showTagResults(tagText);
            });

            tag.addEventListener('keyup', event => {
                let tagText = tag.textContent;
                if (event.which === 13) {
                    this.content.classList.contains('show-tag-results') ? this.hideTagResults() : this.showTagResults(tagText);
                }
            });
        });

        this.backBtn.addEventListener('click', event => {
            this.content.classList.toggle('show-tag-results');
        });
    }

    showTagResults(text) {
        this.selectedTag.textContent = text;
        this.content.classList.add('show-tag-results');
    }

    hideTagResults() {
        this.content.classList.remove('show-tag-results');
    }

    toggle() {
        this.modal.classList.contains('active') ? this.close() : this.open();
    }

    close() {
        this.modal.classList.remove('active');
        this.search.blur();
        this.btn.focus();
        this.hideTagResults();
        this.modal.addEventListener('transitionend', e => {
            if (e.target === this.modal && e.propertyName === 'visibility') {
                this.search.value = '';
            }
        });
    }

    open() {
        this.modal.classList.add('active');
        this.modal.addEventListener('transitionend', e => {
            if (e.target === this.modal && e.propertyName === 'visibility') {
                setTimeout(() => {
                    this.search.focus();
                }, 100);
            }
        });
    }
}


const searchModalBtns = Array.from(document.querySelectorAll('[data-toggle="modal"]'));

for (let btn of searchModalBtns) {
    const search = new SearchModal(btn);
    search.init();
}

