
export const useFormattedDate = (fecha, options = {}) =>{
    if(!fecha) return "";

    const date = new Date(fecha);

    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, "0")

    return `${month} - ${year}`;
}

