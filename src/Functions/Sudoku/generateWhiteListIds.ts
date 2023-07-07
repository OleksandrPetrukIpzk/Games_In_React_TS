interface GenerateWhiteListIdsInterface {
    (
        difficult: number
    ): any
}

export const generateWhiteListIds: GenerateWhiteListIdsInterface = (difficult) => {
    if (difficult > 0) {
        let count: number = 80 - difficult;
        const arrIds: Array<number> = [];
        while (count > 0) {
            const randomId: number = Math.ceil(Math.random() * (80));
            if (!arrIds.includes(randomId)) {
                arrIds.push(randomId);
                count -= 1;
            }
        }
        return arrIds;
    }
}