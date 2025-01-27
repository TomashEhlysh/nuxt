<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-row">
                <div class="footer-col">
                    <h4 class="footer-title">
                        {{ $t('footer.about.title') }}
                    </h4>
                    <ul class="footer-list">
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item1') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item2') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item3') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item4') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item5') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item6') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item7') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item8') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item9') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item10') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.about.item11') }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-row">
                <div class="footer-col">
                    <h4 class="footer-title">
                        {{ $t('footer.cabinet.title') }}
                    </h4>
                    <ul class="footer-list">
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.cabinet.item1') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.cabinet.item2') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.cabinet.item3') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.cabinet.item4') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.cabinet.item5') }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">
                        {{ $t('footer.order.title') }}
                    </h4>
                    <ul class="footer-list">
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.order.item1') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.order.item2') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.order.item3') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.order.item4') }}
                            </NuxtLink>
                        </li>
                        <li class="footer-item">
                            <NuxtLink href="/">
                                {{ $t('footer.order.item5') }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-row">
                <div class="footer-col footer-col_end">
                    <NuxtLink :href="`/`">
                        <img src="/images/logo.png" alt="Logo" class="footer-logo">
                    </NuxtLink> 
                    <ul class="footer-social">
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M22.0002 10.0002V10.0135M5.3335 10.6668C5.3335 9.25234 5.8954 7.89579 6.89559 6.89559C7.89579 5.8954 9.25234 5.3335 10.6668 5.3335H21.3335C22.748 5.3335 24.1045 5.8954 25.1047 6.89559C26.1049 7.89579 26.6668 9.25234 26.6668 10.6668V21.3335C26.6668 22.748 26.1049 24.1045 25.1047 25.1047C24.1045 26.1049 22.748 26.6668 21.3335 26.6668H10.6668C9.25234 26.6668 7.89579 26.1049 6.89559 25.1047C5.8954 24.1045 5.3335 22.748 5.3335 21.3335V10.6668ZM12.0002 16.0002C12.0002 17.061 12.4216 18.0784 13.1717 18.8286C13.9219 19.5787 14.9393 20.0002 16.0002 20.0002C17.061 20.0002 18.0784 19.5787 18.8286 18.8286C19.5787 18.0784 20.0002 17.061 20.0002 16.0002C20.0002 14.9393 19.5787 13.9219 18.8286 13.1717C18.0784 12.4216 17.061 12.0002 16.0002 12.0002C14.9393 12.0002 13.9219 12.4216 13.1717 13.1717C12.4216 13.9219 12.0002 14.9393 12.0002 16.0002Z" stroke="#BAB4E1" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M9.3335 13.3333V18.6667H13.3335V28H18.6668V18.6667H22.6668L24.0002 13.3333H18.6668V10.6667C18.6668 10.313 18.8073 9.97391 19.0574 9.72386C19.3074 9.47381 19.6465 9.33333 20.0002 9.33333H24.0002V4H20.0002C18.2321 4 16.5364 4.70238 15.2861 5.95262C14.0359 7.20286 13.3335 8.89856 13.3335 10.6667V13.3333H9.3335Z" stroke="#BAB4E1" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M2.6665 10.6668C2.6665 9.25234 3.22841 7.89579 4.2286 6.89559C5.22879 5.8954 6.58535 5.3335 7.99984 5.3335H23.9998C25.4143 5.3335 26.7709 5.8954 27.7711 6.89559C28.7713 7.89579 29.3332 9.25234 29.3332 10.6668V21.3335C29.3332 22.748 28.7713 24.1045 27.7711 25.1047C26.7709 26.1049 25.4143 26.6668 23.9998 26.6668H7.99984C6.58535 26.6668 5.22879 26.1049 4.2286 25.1047C3.22841 24.1045 2.6665 22.748 2.6665 21.3335V10.6668Z" stroke="#BAB4E1" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.3332 12.0002L19.9998 16.0002L13.3332 20.0002V12.0002Z" stroke="#BAB4E1" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M10.6667 26.6667L16 14.6667M14.2667 18.6667C14.8493 20.3507 16.1733 21.3333 17.6667 21.3333C20.428 21.3333 22.6667 19.2613 22.6667 16C22.6678 15.0264 22.4557 14.0644 22.0453 13.1816C21.6348 12.2988 21.036 11.5166 20.2909 10.89C19.5458 10.2633 18.6725 9.80752 17.7324 9.55453C16.7922 9.30155 15.8081 9.25754 14.8492 9.42561C13.8902 9.59367 12.9797 9.96973 12.1816 10.5273C11.3836 11.085 10.7173 11.8106 10.2297 12.6533C9.74214 13.4959 9.44501 14.4352 9.35925 15.4049C9.27349 16.3747 9.40118 17.3515 9.73333 18.2667M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z" stroke="#BAB4E1" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="footer-contact">
                        <a href="mailto:name@gmail.com">
                            name@gmail.com
                        </a>
                        <a href="tel:+0123456789">
                            +0123456789
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <span class="footer-info">
                © 2010-2025 tufiprofi
            </span>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>