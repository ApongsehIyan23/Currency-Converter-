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


// Exchange Rates
const exchangeRates = {
    "xaf-rates": { RWF: 2.11, USD: 0.0016, EUR: 0.0015, GBP: 0.0013, JPY: 0.25, AUD: 0.0025 },
    "rwf-rates": { XAF: 0.47, USD: 0.00077, EUR: 0.00072, GBP: 0.00062, JPY: 0.12, AUD: 0.0012 },
    "usd-rates": { XAF: 614.50, RWF: 1295.00, EUR: 0.94, GBP: 0.81, JPY: 154.20, AUD: 1.55 },
    "eur-rates": { XAF: 655.95, RWF: 1378.00, USD: 1.06, GBP: 0.86, JPY: 164.10, AUD: 1.65 },
    "gbp-rates": { XAF: 760.20, RWF: 1602.00, USD: 1.24, EUR: 1.16, JPY: 190.50, AUD: 1.92 },
    "jpy-rates": { XAF: 3.98, RWF: 8.40, USD: 0.0065, EUR: 0.0061, GBP: 0.0052, AUD: 0.010 },
    "aud-rates": { XAF: 395.40, RWF: 835.00, USD: 0.64, EUR: 0.60, GBP: 0.52, JPY: 99.40 }
};

const selectElement = document.getElementById('base-currency');
const displayArea = document.getElementById('rates-display');

selectElement.addEventListener('change', function() {
    const selectedOption = selectElement.querySelector('option:checked');
    
    // Get the key and value using getAttribute
    const rateKey = selectedOption.getAttribute('data-convertion-rate');
    const baseSymbol = selectedOption.getAttribute('value');
    
    const rates = exchangeRates[rateKey];

    displayArea.innerHTML = `<h4>Current conversion for 1 ${baseSymbol}:</h4><hr>`;

    if (rates) {
        const list = document.createElement('ul');
        list.style.listStyle = "none";
        list.style.padding = "10px 0";

        for (const [targetCurrency, value] of Object.entries(rates)) {
            const listItem = document.createElement('li');
            listItem.style.padding = "5px 0";
            listItem.innerHTML = `<strong>1 ${baseSymbol}</strong> = ${value} ${targetCurrency}`;
            list.appendChild(listItem);
        }
        
        displayArea.appendChild(list);
    }
});

const amountInput = document.getElementById('amount-input');
const convertBtn = document.getElementById('convert-btn');
const targetSelect = document.getElementById('target-currency');
const baseSelect = document.getElementById('base-currency');

convertBtn.addEventListener('click', function() {
    const baseOption = baseSelect.querySelector('option:checked');
    const baseKey = baseOption.getAttribute('data-convertion-rate');
    const baseSymbol = baseOption.getAttribute('value');

    const targetOption = targetSelect.querySelector('option:checked');
    const targetSymbol = targetOption.getAttribute('value');

    const amount = amountInput.value;
    const rates = exchangeRates[baseKey];

    if (amount && rates) {
        const specificRate = rates[targetSymbol];
        const result = (amount * specificRate).toLocaleString();

        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `
            <div style="background: #e7f5ed; padding: 10px; border: 1px solid #0a964e; margin-bottom: 15px;">
                <strong>Result:</strong> ${amount} ${baseSymbol} = ${result} ${targetSymbol}
            </div>
        `;
        displayArea.prepend(resultDiv); 
    }
});