document.addEventListener('DOMContentLoaded', () => {
    // 1. Use querySelectorAll to get ALL buttons with this attribute
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('[data-modal-close]');

    // 2. Loop through triggers to OPEN the modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const modalID = this.getAttribute('data-modal-target');
            const modal = document.getElementById(modalID);

            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // 3. Loop through close buttons to CLOSE the modal
    closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modalID = this.getAttribute('data-modal-close');
            const modal = document.getElementById(modalID);

            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }
        });
    });
});