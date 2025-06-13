import { ref } from 'vue'
import { supabase } from '@/supabase'

const user = ref(null)

const fetchUser = async () => {
  const { data } = await supabase.auth.getUser()
  user.value = data.user
}

// Lắng nghe thay đổi đăng nhập/đăng xuất
supabase.auth.onAuthStateChange((_event, session) => {
  user.value = session?.user || null
})

export { user, fetchUser }
