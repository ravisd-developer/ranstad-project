export function convertArray(arr: any[]) {
    // const [newArray, setNewArray] = useState<any>([]);
    // to get the All uniq UserID In map
    const newArray: any[] = [];
    const userIdMap = new Map();


    // to get the All uniq UserID
    arr.map((item) => {
        userIdMap.set(item?.userId, item?.userId);
    });

    // TO create new Apraay to iterate easily
    userIdMap.forEach((value) => {
        const items = arr.filter(item => item.userId == value)
        const arrayItem = { userId: value, insideUser: items }
        newArray.push(arrayItem);
    });


    return newArray;
}