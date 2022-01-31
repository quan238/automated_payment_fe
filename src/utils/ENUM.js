export const TIKI_BILLING_URL = 'https://tiki.vn/san-pham-so/thanh-toan-hoa-don-dien/s1?searchredirect=1'
export const BILL_ARRAY_EXAMPLE = ['PC08AA0819908', 'PC08AA0808099', 'PC08AA0807287', 'PC08AA0802879', 'PC08AA0515250']

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );