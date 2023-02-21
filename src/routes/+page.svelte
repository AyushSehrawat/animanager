<script>
	import { goto } from '$app/navigation';
	export let data;

	const udata = data.user_data;

	function handleClick(uri) {
		goto(`${uri}`);
	}
</script>

<main class="font-fc flex flex-col min-h-screen w-full p-3 md:p-9">
	<navbar
		class="flex rounded-md shadow-md items-center justify-center text-center text-gray-700 bg-gray-100 p-2 px-4 min-w-full"
	>
		<span class="text-2xl font-medium tracking-widest ">Ani-Manager</span>
	</navbar>
	<div
		class="flex p-2 min-w-full rounded-md bg-gray-100 shadow-md justify-center mt-2 items-center font-medium text-xl gap-2"
	>
		<button
			on:click={() => {
				handleClick('/api/login');
			}}
			class="p-2 bg-gray-200 rounded-md hover:bg-gray-300">Login</button
		>
		<button
			on:click={() => {
				handleClick('/api/logout');
			}}
			class="p-2 bg-gray-200 rounded-md hover:bg-gray-300">Logout</button
		>
	</div>
	<div class="flex-1 h-full mt-2 p-2 rounded-md shadow-md bg-gray-50 overflow-auto">
		{#if data['success'] === true}
			<div class="flex items-center gap-8 p-2 bg-gray-200 shadow-xl rounded-md backdrop-blur">
				<div class="flex flex-col gap-2 items-center">
					<img src={udata.User.avatar.large} />
					<span class="text-2xl text-gray-700 font-medium">{udata.User.name}</span>
				</div>
				<div class="flex flex-col items-start">
					<span>Anime Statistics</span>
					<span>Total Anime Watched : {udata.User.statistics.anime.count}</span>
					<span>Total episodes watched: {udata.User.statistics.anime.episodesWatched}</span>
					<span>Total watchtime: {Math.round((udata.User.statistics.anime.minutesWatched/1440)*10)/10}</span>
					<br />
					<span>Manga Statistics</span>
					<span>Total manga read: {udata.User.statistics.manga.count}</span>
					<span>Total chapters read: {udata.User.statistics.manga.chaptersRead}</span>
					<span>Total volumes read: {udata.User.statistics.manga.volumesRead}</span>
				</div>
			</div>
		{:else}
			<div class="font-bold text-2xl flex justify-center text-red-400">
				<span> Login before continuing to ani-manager </span>
			</div>
		{/if}
	</div>
</main>
