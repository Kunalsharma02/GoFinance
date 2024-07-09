<template>
    <Layout />

    <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div class="my-24 flex justify-center">
                <div class="lg:w-2/5 md:w-1/2 w-2/3">
                    <form class="bg-white p-10 rounded-lg shadow-lg min-w-full" @submit.prevent="submitForm">
                        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Transfer Amount</h1>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="email">E-Mail</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email"
                                v-model="email" id="email" placeholder="Enter User Email" />
                        </div>
                        <div>
                            <label class="text-gray-800 font-semibold block my-3 text-md" for="amount">Amount</label>
                            <input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="number"
                                v-model="amount" id="amount" placeholder="Enter Amount" />
                        </div>

                        <button type="submit"
                            class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Deposit</button>

                        <div v-if="message" :class="messageClass" class="mt-4 p-2 rounded-lg">
                            {{ message }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from "../components/Layout.vue";
import axios from 'axios';

export default {
    components: {
        Layout
    },
    data() {
        return {
            email: '',
            amount: null,
            message: '',
            messageClass: ''
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:5000/transfer', {
                    email: this.email,
                    amount: this.amount
                });

                if (response.status === 200) {
                    this.message = 'Money transferred successfully!';
                    this.messageClass = 'bg-green-100 text-green-700';
                }
            } catch (error) {
                this.message = 'An error occurred. Please try again.';
                this.messageClass = 'bg-red-100 text-red-700';
            }
        }
    }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
