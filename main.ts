import { Plugin, type IconName, Notice, normalizePath } from 'obsidian';

export default class OGTodo extends Plugin {
	static readonly #NEW_TODO_ICON: IconName = 'list-plus';
	static readonly #TODO_STYLES_NAME: string = 'ogtodo.css';
	private override onload() {
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

	private makeNewTodo(): void
	{
		const reg: string = this.app.vault.configDir;
		console.log(normalizePath(reg), reg);
		new Notice('Made new todo document!');
		// this.app.vault.create(`./.obsidian/plugins/ogtodo/new_todo ${Date.now()}.md`, 'empty for now...').catch((reason) => console.log(reason));
	}

	/**
	 * @throws {Error}
	 */
	private loadTodoStyleToSnippetDir(): void
	{
		if (typeof this.manifest.dir === 'undefined')
		{
			throw new Error(`${this.manifest.name} dir is undefined!`);
		}

		const vault_config_dir: string = normalizePath(this.app.vault.configDir);
		const plugin_dir: string = normalizePath(this.manifest.dir);
		this.app.vault.adapter;
		// this.app.vault.create(`${vault_config_dir}/snippets/`, 'empty for now...').catch((reason) => console.log(reason));
	}
}
