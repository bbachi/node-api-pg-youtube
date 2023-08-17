


class TestData {

    data = [
        {
            task: "asdsadsad",
            id: "123",
            description: "asdjhgadg jagsdkjahd",
            createdBy: "user1",
            createdTime: "2023"
        },
        {
            task: "asdsadsad",
            id: "124",
            description: "asdjhgadg jagsdkjahd",
            createdBy: "user1",
            createdTime: "2023"
        },
        {
            task: "asdsadsad",
            id: "125",
            description: "asdjhgadg jagsdkjahd",
            createdBy: "user1",
            createdTime: "2023"
        }
    ]

    getTasks() {
        return this.data;
    }

    createTask(task) {
        this.data.push(task);
        return this.data;
    }

}

module.exports = new TestData()