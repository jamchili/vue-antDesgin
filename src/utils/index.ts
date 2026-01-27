

export const deepCopy = <T>(val: T): T => {
  if (val === null || val === undefined) return val


  if (typeof val !== 'object') {
    return val
  }

  if (Array.isArray(val)) {
    const clonedArray: any[] = [];
    val.forEach(element => {
      clonedArray.push(deepCopy(element))
    });

    return clonedArray as T
  }

  if (Object.prototype.toString.call(val) === "[object Object]") {
    const clonedObject: Record<string, any> = {};
    for (const k in val) {
      clonedObject[k] = deepCopy(val[k])
    }
    return clonedObject as T
  }


  return val

}