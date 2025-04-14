class AppPage {
    // Selectors
    get taskInput() {
        return $('#taskInput');
    }

    get addButton() {
        return $('#addBtn');
    }

    get taskListItems() {
        return $$('#taskList li');
    }

    getCompleteButtonForTask(taskText) {
        return $(`//li[contains(text(), "${taskText}")]/button[contains(@class, "complete-btn")]`);
    }

    getDeleteButtonForTask(taskText) {
        return $(`//li[contains(text(), "${taskText}")]/button[contains(@class, "delete-btn")]`);
    }

    // Actions
    async setTask(taskText) {
        await this.taskInput.setValue(taskText);
    }

    async clickAddButton() {
        await this.addButton.click();
    }

    async completeTask(taskText) {
        const completeButton = await this.getCompleteButtonForTask(taskText);
        await completeButton.click();
    }

    async deleteTask(taskText) {
        const deleteButton = await this.getDeleteButtonForTask(taskText);
        await deleteButton.click();
    }

    async isTaskCompleted(taskText) {
        const task = await $(`//li[contains(text(), "${taskText}") and contains(@class, "completed")]`);
        return await task.isDisplayed();
    }

    async isTaskInList(taskText) {
        const task = await $(`//li[contains(text(), "${taskText}")]`);
        return await task.isDisplayed();
    }
}

module.exports = new AppPage();