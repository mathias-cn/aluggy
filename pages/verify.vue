<template>
    <main class="relative w-full h-full flex flex-col items-center justify-start gap-6 p-4">
        <NuxtLink to="/auth" class="absolute top-4 left-4 text-green-700">
            <LucideArrowLeft />
        </NuxtLink>
        <Logo color="green"/>
        <div class="space-y-6 text-left max-w-[380px]">
            <h3 class="font-semibold text-3xl">Confirme seu e-mail</h3>
            <!-- <div class="w-full h-[1px] bg-gray-300"></div> -->
            <p class="text-sm">Digite o código que enviamos para {{ emailToVerify }}. Verifique o spam caso não encontre o email.</p>
            
            <form @submit.prevent="" class="space-y-2 min-w-[260px]">
                <div class="flex-col flex gap-1 items-start justify-center">
                    <input class="p-2 rounded-lg border-[1px] border-gray-300 w-full outline-none" type="number" max="999999" name="number" id="number" placeholder="Código de 6 dígitos">
                </div>
                <button class="w-full text-center bg-green-700 rounded-full text-white py-3">Continuar</button>
            </form>

            <p v-if="secondsToRequestAnotherEmail > 0 && !requestAnotherEmailBtnVisible" class="text-sm">Caso não tenha recebido o código, você pode pedir outro em {{ secondsToRequestAnotherEmail }} segundos.</p>
            <div v-else class="w-full text-center">
                <button class="text-green-700 font-semibold">Receber outro código</button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

const emailToVerify = computed(() => {
    return localStorage.getItem('emailToVerify')
})

const secondsToRequestAnotherEmail = ref(30)
const requestAnotherEmailBtnVisible = ref(false)


onMounted(() => {
    const timer = setInterval(() => {
        secondsToRequestAnotherEmail.value -= 1
    }, 1000)
    
    watch(secondsToRequestAnotherEmail, () => {
        if(secondsToRequestAnotherEmail.value <= 0) {
            clearInterval(timer)
            requestAnotherEmailBtnVisible.value = true
        }
    })
})

</script>

<style scoped>

</style>