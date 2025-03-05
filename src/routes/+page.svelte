<script>
  import { trpc } from "$lib/trpc/client";
  const fetchUser = async () => {
    const users = await trpc().getUser.query();
    console.log(users);
  };
</script>

<div>
  <button on:click={fetchUser}>Fetch User</button>
</div>
