export const makeRandomUser = () => {
    const names = ['Peter', 'Marina', 'Robert', 'Bazil'];
    const ages = [12, 13, 15, 21];
    const jobs = ['coder', 'cook', 'teacher', 'singer'];
    const randIdx = Math.floor(Math.random() * 4);

    return {
        name: names[randIdx],
        age: ages[randIdx],
        job: jobs[randIdx]
    }
};
