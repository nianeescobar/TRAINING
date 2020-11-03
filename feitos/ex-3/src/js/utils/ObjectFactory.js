export function ObjectFactory(els, ...names) {
    return names.reduce((acc, name) => {
        return Object.assign(acc, { [name]: els[name].value })
    }, {})
}

export function mapObjectNonPrefix(prefix, obj) {
    return Object.keys(obj).reduce((acc, key) => {

        // inputDateOfBithday -> [D][a][teOfBirthday]

        let keyWithoutPrefix = key.includes(prefix) 
        ? key
            .replace(prefix, '')
            .split('')
            .map((item, idx) => idx === 0 ? item.toLowerCase() : item).join('') 
        : key

        return Object.assign(acc, { [keyWithoutPrefix]: obj[key]  })
    }, {})
}
