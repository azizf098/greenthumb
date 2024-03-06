<template>
  <div class="bg-slate-200 flex h-screen">
    <aside class="fixed z-50 md:relative">
      <!-- Sidebar -->
      <input type="checkbox" class="peer hidden" id="sidebar-open" />
      <label
        class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-grey-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
        for="sidebar-open">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <nav aria-label="Sidebar Navigation"
        class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-green-600 text-white transition-all md:h-screen md:w-64 lg:w-72">
        <div class="bg-green-600 mt-5 py-4 pl-10 md:mt-10">
          <span class="">
            <span
              class="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-400 align-bottom text-2xl font-bold">G</span>
            <span class="text-xl">reenThumb</span>
          </span>
        </div>
        <ul class="mt-8 space-y-3 md:mt-10">
          <div class="my-6 mt-auto ml-10 flex cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-10 h-11">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <div class="ml-3">
              <p class="font-medium">Aziz</p>
              <p class="text-sm text-gray-300">Bandung, Indonesia</p>
            </div>
          </div>
          <li class="relative">
            <button
              class="focus:bg-green-800 hover:bg-green-800 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg></span><span class="">Overview</span>
            </button>
          </li>
          <li class="relative">
            <button
              class="focus:bg-green-800 hover:bg-green-800 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg></span><span class="">Transactions</span>
            </button>
          </li>
          <li class="relative">
            <button
              class="focus:bg-green-800 hover:bg-green-800 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg></span><span class="">Send Money</span>
            </button>
          </li>
          <li class="relative">
            <button
              class="focus:bg-green-800 hover:bg-green-800 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
              <span class="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"
                  height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
                  <path fill="currentColor"
                    d="M32 15h-1V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-.82v-.36A1 1 0 0 1 6 6h23.58a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3a3.08 3.08 0 0 0 0 .36v20.57A4.1 4.1 0 0 0 7.13 32H30a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-3 15H7.13A2.11 2.11 0 0 1 5 27.93V9.88A3.11 3.11 0 0 0 6 10h23v5h-7a5 5 0 0 0 0 10h7Zm2-7h-9a3 3 0 0 1 0-6h9Z"
                    class="clr-i-outline clr-i-outline-path-1" />
                  <circle cx="23.01" cy="20" r="1.5" fill="currentColor" class="clr-i-outline clr-i-outline-path-2" />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg></span><span class="">Payments</span>
            </button>
          </li>
          <li class="relative">
            <button
              class="focus:bg-green-800 hover:bg-green-800 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg></span><span class="">Cards</span>
            </button>
          </li>
          <li class="relative">
            <button
              class="focus:bg-green-800 hover:bg-green-800 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg></span><span class="">Settings</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
    <!-- /Sidebar -->

    <div class="flex h-full w-full flex-col">
      <!-- Navbar -->
      <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
        <div
          class="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
          <div class="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto">
            <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="11" cy="11" r="8" class=""></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
            </svg>
            <input type="name" name="search"
              class="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
              placeholder="Cari Sesuatu" />
          </div>

          <ul class="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
            <li class="">
              <button
                class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </li>
            <li class="">
              <button
                class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
            </li>
            <li class="">
              <button
                class="flex h-8 w-8 items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </header>
      <!-- /Navbar -->
      <!-- Main -->
      <div class="h-full overflow-hidden pl-10">
        <main id="dashboard-main" class="h-[calc(100vh-10rem)] overflow-auto px-4 py-10">
          <!-- Put your content inside of the <main/> tag -->
          <h1 class="text-2xl font-black text-gray-800">Selamat Datang!</h1>
          <p class="mb-6 text-gray-600">Disini berisi tentang konten kami.</p>
          <div class="flex flex-wrap gap-x-4 gap-y-8">
            <div class="mx-auto flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row">
              <div class="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
                <img src="../assets/taman.jpg"
                  class="shadow-blue-600/10 w-full max-w-sm object-contain object-left shadow-lg" />
                <div class="p-4">
                  <p class="mb-1 font-medium uppercase text-blue-600">Our Practices</p>
                  <h5 class="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, temporibus!</h5>
                  <div class="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
                <img src="../assets/tanaman.jpg"
                  class="shadow-blue-600/10 w-full max-w-sm object-contain object-left shadow-lg" />
                <div class="p-4">
                  <p class="mb-1 font-medium uppercase text-blue-600">Our Practices</p>
                  <h5 class="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae, temporibus!</h5>
                  <div class="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-10 max-w-screen lg:mb-0 lg:pr-16 xl:pr-20">

            <div class="mx-auto mt-8 max-w-screen-lg px-2">
              <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                <p class="flex-1 text-base font-bold text-gray-900">Latest Payments</p>
                <div class="mt-4 sm:mt-0">
                  <div class="flex items-center justify-start sm:justify-end">
                    <div class="flex items-center">
                      <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                      <select name=""
                        class="sm: mr-4 block w-full whitespace-pre bg-gray-200 rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                        <option class="whitespace-no-wrap text-sm">Recent</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-6 overflow-hidden rounded-xl border shadow">
                <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                  <thead class="hidden border-b lg:table-header-group">
                    <tr class="">
                      <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Nama Kategori
                      </td>
                      <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
                      <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Amount</td>
                      <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                    </tr>
                  </thead>
                  <tbody class="lg:border-gray-300">
                    <tr v-for="kategori in getKategori" :key="kategori.id">
                      <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        {{ kategori.name }}
                        <div class="mt-1 lg:hidden">
                          <p class="font-normal text-gray-500">07 February, 2022</p>
                        </div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        07
                        February, 2022</td>
                      <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                        $59.00
                        <div
                          class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                          Complete</div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                          Complete
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        Standard Plan - Jan 2022
                        <div class="mt-1 lg:hidden">
                          <p class="font-normal text-gray-500">09 January, 2022</p>
                        </div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        09
                        January, 2022</td>
                      <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                        $59.00
                        <div
                          class="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-200 py-1 px-2 text-left font-medium text-red-500 lg:hidden">
                          Canceled</div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <div class="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">Canceled
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        Basic Plan - Dec 2021
                        <div class="mt-1 lg:hidden">
                          <p class="font-normal text-gray-500">15 December, 2021</p>
                        </div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        15
                        December, 2021</td>
                      <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                        $29.00
                        <div
                          class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                          Complete</div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                          Complete
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        Basic Plan - Nov 2021
                        <div class="mt-1 lg:hidden">
                          <p class="font-normal text-gray-500">14 November, 2021</p>
                        </div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        14
                        November, 2021</td>
                      <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                        $29.00
                        <div
                          class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-200 py-1 px-2 text-left font-medium text-blue-500 lg:hidden">
                          Pending</div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <div class="inline-flex items-center rounded-full bg-blue-200 py-1 px-2 text-blue-500">Pending
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        Basic Plan - Oct 2021
                        <div class="mt-1 lg:hidden">
                          <p class="font-normal text-gray-500">15 October, 2021</p>
                        </div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        15
                        October, 2021</td>
                      <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                        $29.00
                        <div
                          class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                          Complete</div>
                      </td>
                      <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                          Complete
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      <!-- /Main -->
    </div>
  </div>
</template>

<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
<style>
:root {
  font-family: 'Source Sans Pro';
}

main#dashboard-main::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

main#dashboard-main::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  background-color: rgb(156 163 175 / 0.75);
}

main#dashboard-main::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(156 163 175 / 0.75);
  border-radius: 10px;
}</style>

<script>
import { mapGetters, mapActions } from 'vuex';
    
    export default {
        computed: {
            ...mapGetters('kategori', ['getKategori']),
        },
        methods: {
            ...mapActions('kategori', ['fetchKategori']),
    },
    created(){
        this.fetchKategori();
    }
}
</script>