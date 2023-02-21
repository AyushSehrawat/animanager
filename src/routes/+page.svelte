<script>
	import { goto } from '$app/navigation';
	export let data;

	const udata = data.user_data;

	function handleClick(uri) {
		goto(`${uri}`);
	}

	let currentTab = 'anime';
	function handleCurrentTab(ct) {
		currentTab = ct;
	}
</script>

<main class="font-op flex flex-col min-h-screen w-full p-3 md:p-9 bg-bg">
	<navbar
		class="flex rounded-md shadow-md items-center justify-between text-center text-text bg-fg p-2 px-4 min-w-full"
	>
		<span class="text-2xl font-medium tracking-widest">Ani-Manager</span>
		<div class="flex items-center font-medium text-xl gap-2">
			<button
				on:click={() => {
					handleClick('/api/login');
				}}
				class="p-2 bg-t1fg rounded-md hover:bg-t2fg">Login</button
			>
			<button
				on:click={() => {
					handleClick('/api/logout');
				}}
				class="p-2 bg-t1fg rounded-md hover:bg-t2fg">Logout</button
			>
		</div>
	</navbar>
	<div class="flex-1 h-full mt-2 p-2 rounded-md shadow-md bg-fg overflow-auto text-textlight">
		{#if data['success'] === true}
			<div class="flex items-center gap-8 p-2 shadow-xl rounded-md backdrop-blur">
				<div class="flex flex-col gap-2 items-center">
					{#if udata.User.avatar.medium}
						<img class="rounded-full" src={udata.User.avatar.medium} />
					{:else}
						<img
							class="rounded-full"
							src="https://s4.anilist.co/file/anilistcdn/user/avatar/medium/default.png"
						/>
					{/if}
					<span class="text-2xl font-medium text-textlighter">{udata.User.name}</span>
				</div>
				<div class="flex gap-8 items-start">
					<div class="flex flex-col items-start">
						<span>Anime Statistics</span>
						<span>Total Anime Watched : {udata.User.statistics.anime.count}</span>
						<span>Total episodes watched: {udata.User.statistics.anime.episodesWatched}</span>
						<span
							>Total watchtime: {Math.round(
								(udata.User.statistics.anime.minutesWatched / 1440) * 10
							) / 10} days</span
						>
					</div>
					<div class="flex flex-col items-start">
						<span>Manga Statistics</span>
						<span>Total manga read: {udata.User.statistics.manga.count}</span>
						<span>Total chapters read: {udata.User.statistics.manga.chaptersRead}</span>
						<span>Total volumes read: {udata.User.statistics.manga.volumesRead}</span>
					</div>
				</div>
			</div>
			<form method="POST" class="flex mt-2 text-xl transition-colors">
				<button
					formaction="?/anime"
					on:click={() => {
						handleCurrentTab('anime');
					}}
					class="p-2 hover:bg-t1fg">Anime</button
				>
				<button
					formaction="?/manga"
					on:click={() => {
						handleCurrentTab('manga');
					}}
					class="p-2 hover:bg-t1fg">Manga</button
				>
			</form>
			{#if currentTab === 'anime'}
				hi
			{:else}
				bye
			{/if}
		{:else}
			<div class="font-semibold text-2xl flex justify-center text-red-300">
				<span> Login before continuing to ani-manager </span>
			</div>
		{/if}
	</div>
</main>
