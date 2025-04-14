const AppPage = require('../pageobjects/app.page');

describe('Mini To-Do App - UI Tests', () => {
    beforeEach(async () => {
        // Navigate to the app (adjust URL if necessary)
        await browser.url('http://localhost:3000/index.html');
    });

    it('should add a new task to the list', async () => {
        const taskText = 'Buy more stuff';

        await AppPage.setTask(taskText);
        await AppPage.clickAddButton();

        // Validate the task appears in the list
        expect(await AppPage.isTaskInList(taskText)).toBe(true);
    });

    it('should mark a task as completed', async () => {
        const taskText = 'Wash the keyboard';

        await AppPage.setTask(taskText);
        await AppPage.clickAddButton();
        await AppPage.completeTask(taskText);

        // Validate the task is marked as completed
        expect(await AppPage.isTaskCompleted(taskText)).toBe(true);
    });

    it('should delete a task from the list', async () => {
        const taskText = 'Clean the screen';

        await AppPage.setTask(taskText);
        await AppPage.clickAddButton();
        await AppPage.deleteTask(taskText);

        // Validate the task no longer exists in the list
        expect(await AppPage.isTaskInList(taskText)).toBe(false);
    });

    it('should not add an empty task', async () => {
        await AppPage.setTask('   '); // Empty task (spaces)
        await AppPage.clickAddButton();

        // Validate no tasks are added
        expect(await AppPage.taskListItems.length).toBe(0);
    });
});