<script>
	import { goto } from '$app/navigation';
	export let data;

	const udata = data.user_data;

	function handleClick(uri) {
		goto(`${uri}`);
	}

	// set current tab
	let currentTab = 'anime';
	function handleCurrentTab(ct) {
		currentTab = ct;
	}
</script>

<main class="font-op flex flex-col min-h-screen w-full p-3 md:p-9 bg-nord-0">
	<navbar
		class="flex rounded-md shadow-md items-center justify-between text-center text-nord-4 bg-nord-1 p-2 px-4 min-w-full border-2 border-nord-2"
	>
		<span class="text-2xl font-medium tracking-widest">Ani-Manager</span>
		<div class="flex items-center font-medium text-xl gap-2">
			<button
				on:click={() => {
					handleClick('/api/login');
				}}
				class="p-2 bg-nord-2 rounded-md hover:bg-nord-3">Login</button
			>
			<button
				on:click={() => {
					handleClick('/api/logout');
				}}
				class="p-2 bg-nord-2 rounded-md hover:bg-nord-3">Logout</button
			>
		</div>
	</navbar>
	<div
		class="flex-1 h-full mt-2 p-2 rounded-md shadow-md bg-nord-1 overflow-auto text-nord-4 border-2 border-nord-2"
	>
		{#if data['success'] === true}
			<div class="flex items-center gap-8 border-b-4 border-nord-3">
				<div class="flex flex-col gap-2 items-center">
					{#if udata.User.avatar.medium}
						<img class="rounded-full" src={udata.User.avatar.medium} />
					{:else}
						<img
							class="rounded-full"
							src="https://s4.anilist.co/file/anilistcdn/user/avatar/medium/default.png"
						/>
					{/if}
					<span class="text-2xl font-semibold">{udata.User.name}</span>
				</div>
				<div class="flex gap-8 items-start">
					<div class="flex flex-col items-start">
						<span class="font-semibold">Anime Statistics</span>
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
			<form method="POST" class="flex mt-2 text-xl transition-colors gap-1">
				<button
					formaction="?/anime"
					on:click={() => {
						handleCurrentTab('anime');
					}}
					class="p-2 bg-nord-2 rounded-md hover:bg-nord-3">Anime</button
				>
				<button
					formaction="?/manga"
					on:click={() => {
						handleCurrentTab('manga');
					}}
					class="p-2 bg-nord-2 rounded-md hover:bg-nord-3">Manga</button
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
