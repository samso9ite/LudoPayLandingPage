// Currency Formatter
export const formatCurrency = (amount, currency = 'NGN', locale  = 'en-US') => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
};