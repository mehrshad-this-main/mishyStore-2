<script setup>
	const loginEmail = ref('')
	const loginPassword = ref('')
	const signupEmail = ref('')
	const signupPassword = ref('')
	const confirmPassword = ref('')

	function login() {
		console.log('ورود با:', loginEmail, loginPassword)
		alert(`ورود با ایمیل: ${loginEmail}`)
	}
	function signup() {
		if (signupPassword !== confirmPassword) {
			alert('رمز عبور و تکرار آن مطابقت ندارند!')
			return
		}
		console.log('ثبت‌نام با:', signupEmail, signupPassword)
		alert(`ثبت‌نام با ایمیل: ${signupEmail}`)
	}
</script>
<template>
	<v-container>
		<v-cord>
			<v-sheet color="info"></v-sheet>
		</v-cord>
	</v-container>
</template>
