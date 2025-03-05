<script>
  import { client } from "$lib/trpc/client";
  const fetchUser = async () => {
    const users = await client().user.test2.query();
    console.log(users);
  };
</script>

<div>
  <button on:click={fetchUser}>Fetch User</button>
</div>
