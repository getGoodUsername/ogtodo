import { CachedMetadata, Plugin, TFile } from 'obsidian';

export default class OGTodo extends Plugin {
	override async onload() {
		this.registerEvent(this.app.metadataCache.on('changed', (file, data, cache: CachedMetadata) => {
			const {frontmatter, links} = cache;
			console.log('frontmatter/yaml header', frontmatter);
			console.log('links', links);

			frontmatter
		}))
	}

}
