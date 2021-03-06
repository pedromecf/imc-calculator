export type BMILevel = {
    title: string;
    color: string;
    icon: "down" | "up";
    minValue: number;
    maxValue: number;
    yourBmi?: number;
}

export const BMI_LEVELS: Array<BMILevel> = [
    { title: "Abaixo do peso", color: "#96A3AB", icon: "down", minValue: 0, maxValue: 18.5 },
    { title: "Normal", color: "#0EAD69", icon: "up", minValue: 18.6, maxValue: 24.9 },
    { title: "Sobrepeso", color: "#E2B036", icon: "down", minValue: 25, maxValue: 30 },
    { title: "Obesidade", color: "#C3423F", icon: "down", minValue: 30.1, maxValue: 99 }
];

export const calculateImc = (height: number, weight: number): BMILevel | null => {
    const imc = weight / (height * height);

    for (let level of BMI_LEVELS) {
        if (imc <= level.maxValue) {
            let levelCopy: BMILevel = {...level};
            levelCopy.yourBmi = parseFloat(imc.toFixed(1));
            return levelCopy;
        }
    }

    return null;
}