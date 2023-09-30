<template>
    <!-- <header class="sticky py-12 px-16 z-10">
        <nav class="flex justify-between items-center">
            <div class="text-4xl font-cera text-transparent">Romik Makavana</div>
            <div class="flex gap-10 float-right">
                <button v-for="(link, index) of links" :key="index"
                    class="relative uppercase text-xs font-light tracking-widest group">
                    {{ link.label }}
                    <span class="absolute -bottom-1 left-0 h-[1px] w-0 bg-white group-hover:w-full"></span>
                </button>
            </div>
        </nav>
    </header> -->
    <main class="h-full w-full">
        <div class="absolute top-0 left-0 h-full w-full">
            <div class="relative h-full py-12 px-16">

                <div class="top-0 left-0">
                    <div class="gradient top-1/4 md:top-1/5 lg:-top-1/4 left-1/4 -translate-x-1/2"></div>
                </div>

                <div class="absolute top-1/2 left-1/2 text-center" style="transform: translate(-50%, -50%);">
                    <div class="inline-block">
                        <p class="uppercase text-sm font-light pl-20 text-left text-zinc-400 tracking-wider">I am</p>
                        <!-- <h1 class="text-7xl uppercase font-black text-left mt-4">Romik</h1>
          <h1 class="text-7xl uppercase font-black text-left mb-4">Makavana</h1> -->
                        <h1 class="font-cera uppercase bg-transparent font-black text-7xl md:text-8xl lg:text-9xl"
                            id="displayName">Romik</h1>
                        <!-- <input class="uppercase outline-none bg-transparent font-black text-7xl md:text-8xl lg:text-9xl w-full" id="displayName" value="Romik"> -->
                        <p
                            class="uppercase text-sm font-light pl-0 md:pl-[50%] text-right md:text-left text-zinc-400 tracking-wider">
                            web developer</p>
                    </div>
                </div>

                <!-- <div
                    class="uppercase font-light text-zinc-400 hover:text-white flex items-center text-xs tracking-widest absolute bottom-20 rotate-90 right-0">
                    scroll <span class="bg-zinc-400 h-[1px] w-6 inline-block ml-4 "></span>
                </div> -->
            </div>
    </div>
</main></template>

<script setup lang="ts">
import { ref } from 'vue';
const links = ref([
  // {
  //   label: "Projects"
  // },
  {
    label: "Contact"
  }
])
</script>