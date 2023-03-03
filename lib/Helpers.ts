export function sanitisePrismaObject (data: any) {
    if (data !==  null)
    {
        if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                const keys = Object.keys(data[i]);
                keys.forEach(key => {
                    if (data[i][key] instanceof Date) {
                        data[i][key] = convertDateObjectToString(data[i][key], true);
                    } else if (typeof data[i][key] === "object") {
                        return sanitisePrismaObject(data[i][key]);
                    }
                    else if (typeof data[i][key] === typeof undefined)
                    {
                        data[i][key] = null
                    }
                })
            }
        } else {
            const keys = Object.keys(data);
            keys.forEach(key => {
                if (data[key] instanceof Date) {
                    data[key] = convertDateObjectToString(data[key], true);
                } else if (typeof data[key] === typeof Object) {
                    return sanitisePrismaObject(data[key]);
                }
                else if (typeof data[key] === typeof undefined)
                {
                    data[key] = null
                }
            });
        }
    }
    return data;
}


export function convertDateObjectToString(dateTimeObject: Date, includeTime: boolean = false) {
    let date = dateTimeObject.toLocaleDateString(undefined, {day: '2-digit', month: '2-digit', year: 'numeric'});
    let time = includeTime ? ' ' + dateTimeObject.toLocaleTimeString() : '';
    return date + time;
}

