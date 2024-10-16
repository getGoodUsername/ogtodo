import { Plugin, IconName } from 'obsidian';

export default class OGTodo extends Plugin {
	static readonly #NEW_TODO_ICON: IconName = 'list-plus';
	override async onload() {
		// this.registerEvent(this.app.metadataCache.on('changed', (file, data, cache: CachedMetadata) => {
		// 	const {frontmatter, links} = cache;
		// 	console.log('frontmatter/yaml header', frontmatter);
		// 	console.log('links', links);

		// 	frontmatter
		// }))

		this.addRibbonIcon(OGTodo.#NEW_TODO_ICON, 'Make new todo', () =>
		{
			console.log('making new todo...');
			this.makeNewTodo();
		})

		this.addCommand({
			id: 'make-new-todo',
			name: 'Make New Todo',
			icon: OGTodo.#NEW_TODO_ICON,
			mobileOnly: false,
			/**
			 * hotkey (keyboard shortcut) should not make
			 * multiple new todos when held down
			 */
			repeatable: false,
			callback: () => { console.log('from command, making a new todo!'); this.makeNewTodo(); }
		})
	}

	makeNewTodo()
	{
		this.app.vault.create(`new_todo ${Date.now()}.md`, 'empty for now...');
	}
}
