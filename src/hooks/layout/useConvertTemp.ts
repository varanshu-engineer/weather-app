import { useTempType } from "./useTempType"


export const useConvertTemp = () => {

    const { tempType } = useTempType()
    const switchTemperature = (temp: number) => {
        let temperature
        switch (tempType) {
            case "C":
                temperature = temp - 273.15
                return `${temperature.toFixed(2)} C`
            case "F":
                temperature = (temp - 273.15) * 9 / 5 + 32
                return `${temperature.toFixed(2)} F`
            case "K":
            default:
                temperature = temp
                return `${temperature} K `
        }
    }

    return switchTemperature

}