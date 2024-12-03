export function useSlider() {
    const scrollContainer = ref<HTMLElement | null>(null);
    const activeBtn = ref<'start' | 'end'>('end')
    const isHovered = ref(false)

    function scrollToStart() {
        if (scrollContainer.value) {
            scrollContainer.value.scrollLeft = 0;
            activeBtn.value = 'end'
        }
    }
    function scrollToEnd() {
        if (scrollContainer.value) {
            scrollContainer.value.scrollLeft = scrollContainer.value.scrollWidth;
            activeBtn.value = 'start'
        }
    }
    function enterHover() {
        isHovered.value = true
    }
    function leaveHover() {
        isHovered.value = false
    }

    return {
        scrollContainer,
        activeBtn,
        isHovered,
        scrollToStart,
        scrollToEnd,
        enterHover,
        leaveHover
    }
}