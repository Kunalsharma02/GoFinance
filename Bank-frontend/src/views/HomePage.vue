<template>

    <Layout />

    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <!-- component -->
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
            <link rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

            <div class="flex flex-wrap bg-pink-500 ">
                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Balance</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">{{ balance }}</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i class="fas fa-chart-bar"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 2,99% </span>
                                <span class="whitespace-nowrap"> Since last month </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">New users</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">2,999</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                        <i class="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 4,01%</span>
                                <span class="whitespace-nowrap"> Since last week </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Sales</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">901</span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                                        <i class="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 1,25% </span>
                                <span class="whitespace-nowrap"> Since yesterday </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">Performance</h5>
                                    <span class="font-semibold text-xl text-blueGray-700">51.02% </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                    <div
                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                        <i class="fas fa-percent"></i>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12% </span>
                                <span class="whitespace-nowrap"> Since last mounth </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="relative pt-8 pb-6">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div class="text-sm text-blueGray-500 font-semibold py-1">
                                Made with <a href="https://www.creative-tim.com/product/notus-js"
                                    class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a
                                    href="https://www.creative-tim.com"
                                    class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>

</template>
<script>
import Layout from "../components/Layout.vue"
import axios from 'axios';

export default {
    components: {
        Layout
    },
    data() {
        return {
            balance: 0
        };
    },
    mounted() {
        this.fetchBalance();
    },
    methods: {
        fetchBalance() {
            axios.post('http://localhost:5000/balance')
                .then(response => {
                    this.balance = response.data.data.Amount;
                })
                .catch(error => {
                    console.error("There was an error fetching the balance:", error);
                });
        }
    }
}
</script>