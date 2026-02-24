(function () {
    function getPanel(header) {
        const panel = header.nextElementSibling;
        if (!panel || !panel.classList.contains('panel')) {
            return null;
        }

        return panel;
    }

    function setExpandedState(header, panel, expanded) {
        header.classList.toggle('active', expanded);
        header.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        panel.style.maxHeight = expanded ? panel.scrollHeight + 'px' : '';
    }

    function syncInitialState() {
        const headers = document.querySelectorAll('.wp-block-legacy-accordion .h4header');

        headers.forEach(function (header) {
            const panel = getPanel(header);

            if (!panel) {
                return;
            }

            const expanded = header.classList.contains('active') || header.getAttribute('aria-expanded') === 'true';
            setExpandedState(header, panel, expanded);
        });
    }

    document.addEventListener('click', function (event) {
        const header = event.target.closest('.wp-block-legacy-accordion .h4header');

        if (!header) {
            return;
        }

        const panel = getPanel(header);

        if (!panel) {
            return;
        }

        setExpandedState(header, panel, !header.classList.contains('active'));
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', syncInitialState);
    } else {
        syncInitialState();
    }
})();
