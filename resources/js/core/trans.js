import store from './store';

let messages = {};

export function setTranslations(next) {
    messages = next || {};
}

function lookup(key) {
    return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), messages);
}

export default function trans(key, replace = {}) {
    let value = lookup(key);
    if (value === undefined) {
        // try config store translations as fallback source
        const cfg = store.state.config && store.state.config.trans;
        if (cfg) {
            value = key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), cfg);
        }
    }
    if (typeof value !== 'string') return key;
    Object.keys(replace).forEach((k) => {
        value = value.replace(new RegExp(':' + k, 'g'), replace[k]);
    });
    return value;
}
