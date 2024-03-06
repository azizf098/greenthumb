<template>
    <div class="w-screen font-mont">
        <div class="mx-auto mt-8 max-w-screen-lg px-2">
            <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                <p class="flex-1 text-base font-bold text-gray-900">Data Tanaman</p>

                <div class="mt-4 sm:mt-0">
                    <div class="flex items-center justify-start sm:justify-end">
                        <div class="flex items-center">
                            <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900">Sort by:</label>
                            <select name=""
                                class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                <option class="whitespace-no-wrap text-sm">Baru Saja</option>
                            </select>
                        </div>

                        <button type="button" @click="exportToCsv"
                            class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                            <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    class=""></path>
                            </svg>
                            Export to CSV
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-6 overflow-hidden rounded-xl border shadow">
                <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                    <thead class="hidden border-b lg:table-header-group">
                        <tr class="">
                            <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                                Nama Tanaman
                            </td>
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                                Deskripsi
                            </td>
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                                Batas Waktu
                            </td>
                            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                                Status
                            </td>
                        </tr>
                    </thead>
                    <tbody class="lg:border-gray-300">
                        <tr v-for="tanaman in tanaman" :key="tanaman.id" class="">
                            <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                {{ tanaman.name }}
                            </td>
                            <td
                                class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                {{ tanaman.deskripsi }}
                            </td>
                            <td
                                class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                                    {{ tanaman.status }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('tanaman', ['getTanaman']),
    },

    created() {
        this.$store.dispatch('tanaman/getTanaman');
    }

}
</script>