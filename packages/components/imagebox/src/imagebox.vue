<script lang="ts" setup>
import { ref } from "vue";
import SwdImageTool from "../components/ImageTool.vue";
// import SwdImagePreview from "../components/ImagePreview.vue";

import type { ImageboxProps } from "./imagebox";
const props = withDefaults(defineProps<ImageboxProps>(), {
  imgSize: 180,
  slotFullPreview: true,
});
const emit = defineEmits<{
  (e: "showImgFullPreview", index: number): void;
}>();
defineOptions({
  name: "SwdImagebox",
});
const imgPreview = ref<boolean>(false);
const selectIndex = ref<number>(-1);
const imageViewSelectIndex = ref<number>(-1);
const imageFullPreviewVisible = ref(false);

const showImgFullPreview = () => {
  if (props.slotFullPreview) {
    emit("showImgFullPreview", selectIndex.value);
  } else {
    imageFullPreviewVisible.value = true;
  }
};

const changeImgIndex = (index: number) => {
  // selectIndex.value = index;
  if (index === -1 && selectIndex.value !== 0) {
    selectIndex.value -= 1;
  } else if (index === 1 && selectIndex.value < props.images.length - 1) {
    selectIndex.value += 1;
  }
};

const showImgPreviewTool = (bool: boolean, index: number) => {
  if (bool) {
    selectIndex.value = index;
    imageViewSelectIndex.value = index;
  } else {
    selectIndex.value = -1;
    imageViewSelectIndex.value = 0;
  }
  imgPreview.value = bool;
};
</script>

<template>
  <div class="image_box">
    <template v-for="(img, index) in images">
      <SwdImageTool
        v-if="
          (!imgPreview && selectIndex === -1) ||
          (imgPreview && selectIndex === index)
        "
        :key="index"
        ref="imageToolRef"
        class="img_tool"
        :style="{
          width: !imgPreview ? imgSize + 'px' : '100%',
          heigth: !imgPreview ? imgSize + 'px' : '100%',
        }"
        :image="img"
        :show-prev="images.length === 1 || index === 0 ? false : true"
        :show-next="
          images.length === 1 || index === images.length - 1 ? false : true
        "
        :img-preview="imgPreview"
        :img-size="imgSize"
        @show-img-preview-tool="showImgPreviewTool($event, index)"
        @change-img-index="changeImgIndex"
        @show-img-full-preview="showImgFullPreview"
      />
    </template>
    <!-- <SwdImagePreview :images="images" :select-img-index="selectIndex" /> -->
  </div>
</template>

<style lang="scss" scoped>
.image_box {
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  .img_tool {
    margin: 5px;
  }
}
</style>
