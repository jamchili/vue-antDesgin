import CpIcon from '@/components/CpIcon.vue'
declare module 'vue' {
  interface GlobalComponents {
    CpIcon: typeof CpIcon
  }
}