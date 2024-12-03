<template>
    <main class="relative w-full h-full flex flex-col items-center justify-start gap-6 p-4">
        <NuxtLink to="/" class="absolute top-4 left-4 text-green-700">
            <LucideArrowLeft />
        </NuxtLink>
        <Logo color="green"/>
        <div class="space-y-6 text-left max-w-[380px]">
            <h3 class="font-semibold text-3xl">Faça login ou crie sua conta</h3>
            <!-- <div class="w-full h-[1px] bg-gray-300"></div> -->
            <p>Descubra as melhores locações do Vale do Paraíba e Litoral Norte de São Paulo!</p>
            
            <form @submit.prevent="handleSubmit" class="space-y-2 min-w-[260px]">
                <div class="flex-col flex gap-1 items-start justify-center">
                    <label for="email" class="font-medium">E-mail</label>
                    <input class="p-2 rounded-lg border-[1px] w-full outline-none" type="email" :class="inputBorder" name="email" id="email" placeholder="Digite seu email aqui" v-model="email">
                </div>
                <p v-if="error" class="text-left text-red-600">{{ error }}</p>
                <button class="w-full text-center bg-green-700 rounded-full text-white py-3">Continuar</button>
            </form>
            
            <div class="w-full text-center">
                <span>ou</span>
            </div>

            <button class="flex w-full items-center justify-between border-[1px] border-gray-300 p-3 rounded-full">
                <NuxtImg src="/google.svg" width="24px" />
                <p class="flex-1 text-center">Continuar com Google</p>
            </button>
            
            <p class="text-sm">Ao continuar, você concorda com nossos <NuxtLink to="#" class="text-green-700">Termos de Serviço</NuxtLink> e <NuxtLink to="#" class="text-green-700">Política de Privacidade</NuxtLink>.</p>
        </div>
    </main>
</template>

<script setup lang="ts">
const router = useRouter()

const email = ref('')
const error = ref<null | string>(null)

const inputBorder = computed(() => {
    if(error.value) return 'border-red-500'
    return 'border-gray-300'
})

function handleSubmit() {
    error.value = null

    if(!email.value || !email.value.includes('@')) {
        error.value = 'Por favor, digite um email válido!'
        return
    }

    // Adicionar envio, req, etc...

    localStorage.setItem('emailToVerify', email.value)
    router.push('/verify')
}

</script>

<style scoped>

</style>