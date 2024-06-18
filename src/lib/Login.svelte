<script>
    import fungo from '../assets/fungo.jpg';

    export let auth;
    function loginHandler(){}
</script>

<div id = "center">
<div class = "m-10 flex justify-center align-top card w-96 bg-gray-800 shadow-xl">
  <figure><img src = {fungo}  alt = "bgn"/></figure>
  <div class="card-body">
    <h2 class="card-title">
      Login
    </h2>
    <form on:submit|preventDefault = {loginHandler}>
      <p class="text-lg pl-1 pb-2">Email</p>
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input type="text" class="grow" placeholder="Email" />
      </label>
      <br>
      <p class="text-lg pl-1 pb-2">Password</p>
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
        <input type="password" class="grow" value="password" />
      </label>
      <br>
      <div style = "witdh:100%; display: flex; justify-content: space-between">
        <button class="btn btn-outline btn-error justify-start"> Cancel </button>
        <button class="btn btn-outline btn-success justify-end"> Login </button>
      </div>
    </form>
  </div>
</div>
</div>

<style>
  #center {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>