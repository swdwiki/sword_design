<script setup lang="ts">
import { ref } from "vue";
import type { ImageToolsProps } from "../src/imagebox";
withDefaults(defineProps<ImageToolsProps>(), {
  imgSize: 180,
  showNext: false,
  showPrev: false,
  imgPreview: false,
});
const emit = defineEmits<{
  (event: "showImgPreviewTool", value: boolean): void;
  (event: "showImgFullPreview"): void;
  (event: "changeImgIndex", index: number): void;
}>();
defineOptions({
  name: "SwdImageTool",
});
const imgRef = ref<any>();
const imgBoxRef = ref<any>();
// const showRotateHandle = ref(true);

const prevImage = (index: number) => {
  emit("changeImgIndex", index);
};

const rotateAngle = ref(0);

const showImgPreviewTool = (type: boolean) => {
  // imgPreview.value = type;
  if (!type) {
    rotateAngle.value = 0;
  }
  emit("showImgPreviewTool", type);
};

const showImgPreview = () => {
  emit("showImgFullPreview");
};

// const rotateImage = (rotateNum: number) => {
//   if (rotateAngle.value + rotateNum >= 360) {
//     rotateAngle.value = 0;
//   } else if (rotateAngle.value + rotateNum <= -360) {
//     rotateAngle.value = 0;
//   } else {
//     rotateAngle.value += rotateNum;
//   }
//   const width = imgRef.value.clientWidth;
//   const height = imgRef.value.clientHeight;
//   imgBoxRef.value.style.width = `${width}px`;
//   imgBoxRef.value.style.height = `${(width * width) / height}px`;
//   if (Math.abs(rotateAngle.value) === 90 || Math.abs(rotateAngle.value) === 270) {
//     console.log(width >= height);
//     if (width >= height) {
//       imgBoxRef.value.style.width = `${width}px`;
//       imgBoxRef.value.style.height = `${(width * width) / height}px`;
//       imgRef.value.style.height = `${(width * width) / height}px`;
//       imgRef.value.style.transform = `rotate(${rotateAngle.value}deg) scale(${width / height})`;
//     } else {
//       // 修改
//       imgBoxRef.value.style.width = `${width}px`;
//       imgBoxRef.value.style.height = `${(width * width) / height}px`;
//       // imgRef.value.style.height = `${width}px`;
//       imgRef.value.style.width = `${width}px`;
//       // 修改结束
//       imgRef.value.style.transform = `rotate(${rotateAngle.value}deg) scale(${
//         width / height
//       }) translate(0,0)`;
//     }
//   }
//   if (Math.abs(rotateAngle.value) === 180 || Math.abs(rotateAngle.value) === 0) {
//     if (width >= height) {
//       imgBoxRef.value.style.width = `${width}px`;
//       imgBoxRef.value.style.height = `${(width * width) / height}px`;
//       imgRef.value.style.height = `${(width * width) / height}px`;
//       imgRef.value.style.transform = `rotate(${rotateAngle.value}deg) scale(1)`;
//     } else {
//       imgBoxRef.value.style.width = `${width}px`;
//       imgBoxRef.value.style.height = `${(width * height) / width}px`;
//       imgRef.value.style.width = `${width}px`;
//       imgRef.value.style.transform = `rotate(${rotateAngle.value}deg) scale(1)`;
//     }
//   }
// };
</script>

<template>
  <div v-if="!imgPreview" @click="showImgPreviewTool(true)">
    <img
      :style="{
        width: imgSize + 'px',
        height: imgSize + 'px',
      }"
      :src="image"
      class="object-cover"
    />
  </div>
  <div v-else>
    <div class="action-bar flex-nowrap bg-gray-100">
      <div
        class="flex-row-start-center cursor-pointer"
        style="margin-right: 10px"
        @click="showImgPreviewTool(false)"
      >
        <svg
          t="1706781738466"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1591"
          width="16"
          height="16"
        >
          <path
            d="M672.495448 771.063111C536.288206 861.520472 350.802077 846.716896 230.724063 726.652386 93.758646 589.702371 93.758646 367.662526 230.724063 230.712511 367.68948 93.762496 589.754297 93.762496 726.719714 230.712511 846.795912 350.775203 861.60252 536.236675 771.139544 672.42803 773.082599 674.008086 774.96705 675.706322 776.783972 677.52304L875.05372 775.781733C902.70344 803.428352 903.102472 847.853384 875.518408 875.434352 848.125328 902.824352 803.92872 903.040688 775.854586 874.969704L677.584842 776.711015C675.771042 774.897418 674.074508 773.01162 672.495448 771.063111L672.495448 771.063111ZM677.120149 677.058399C786.692482 567.498387 786.692482 389.86651 677.120149 280.306498 567.547815 170.746486 389.895962 170.746486 280.323628 280.306498 170.751294 389.86651 170.751294 567.498387 280.323628 677.058399 389.895962 786.61841 567.547815 786.61841 677.120149 677.058399ZM320 448 320 512 640 512 640 448 320 448Z"
            fill="#515151"
            p-id="1592"
          ></path>
        </svg>
        <span class="ml-1 text-xs">收起</span>
      </div>
      <div
        class="flex-row-start-center cursor-pointer"
        style="margin-right: 10px"
        @click="showImgPreview"
      >
        <svg
          t="1706781718043"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5569"
          width="16"
          height="16"
        >
          <path
            d="M672.495448 771.063111C536.288206 861.520472 350.802077 846.716896 230.724063 726.652386 93.758646 589.702371 93.758646 367.662526 230.724063 230.712511 367.68948 93.762496 589.754297 93.762496 726.719714 230.712511 846.795912 350.775203 861.60252 536.236675 771.139544 672.42803 773.082599 674.008086 774.96705 675.706322 776.783972 677.52304L875.05372 775.781733C902.70344 803.428352 903.102472 847.853384 875.518408 875.434352 848.125328 902.824352 803.92872 903.040688 775.854586 874.969704L677.584842 776.711015C675.771042 774.897418 674.074508 773.01162 672.495448 771.063111L672.495448 771.063111ZM677.120149 677.058399C786.692482 567.498387 786.692482 389.86651 677.120149 280.306498 567.547815 170.746486 389.895962 170.746486 280.323628 280.306498 170.751294 389.86651 170.751294 567.498387 280.323628 677.058399 389.895962 786.61841 567.547815 786.61841 677.120149 677.058399ZM448 448 320 448 320 512 448 512 448 640 512 640 512 512 640 512 640 448 512 448 512 320 448 320 448 448Z"
            fill="#707070"
            p-id="5570"
          ></path>
        </svg>
        <span class="ml-1 text-xs">查看大图</span>
      </div>
    </div>
    <div ref="imgBoxRef" style="width: 100%; position: relative">
      <img ref="imgRef" :src="image" draggable="false" style="width: 100%" />
      <div
        v-if="showPrev"
        class="toggle-area prev"
        @click="prevImage(-1)"
      ></div>
      <div
        class="toggle-area-zoomout zoomout"
        @click="showImgPreviewTool(false)"
      ></div>
      <div v-if="showNext" class="toggle-area next" @click="prevImage(1)"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prev {
  left: 0;
  cursor: url(data:;base64,AAABAAEAEBwAAAEAIACYBwAAFgAAACgAAAAQAAAAOAAAAAEAIAAAAAAAAAcAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAK9fX1gfn5+YUAAAAGAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1g///////////+fn5ggAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1hP////////////////39/YIAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1hf////////////////v7+4IAAAADAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2h/////////////////v7+4AAAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2iP////////////////v7+38AAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2if////////////////v7+34AAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2i/////////////////v7+3wAAAADAAAAAgAAAAEAAAABAAAAAQAAAAMAAAAFAAAABwAAAAkAAAAL9vb2jP////////////////v7+3sAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAFAAAABwAAAAkAAAAL9vb2jf////////////////v7+3oAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAABgAAAAkAAAAL9vb2j/////////////////v7+3gAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAK9vb2kP////////////////n5+XgAAAAEAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAH+Pj4kP////////////////T09HkAAAAHAAAABAAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAA+/v7j/////////////////Ly8nkAAAAKAAAACAAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAPv7+3T////////////////29vaKAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAD+/v7d/////////////////b29ogAAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAgAAAAP7+/t6////////////////9fX1hQAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAEAAAACAAAAA/v7+33////////////////19fWCAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAQAAAAIAAAAD+/v7gP////////////////X19X8AAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAABAAAAAgAAAAP7+/uD////////////////9fX1fAAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/v7+4b////////////////09PR5AAAACwAAAAkAAAAHAAAABQAAAAMAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAIAAAAD+/v7if////////////////Ly8ncAAAAKAAAACQAAAAYAAAAEAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAP7+/uM////////////////8vLydQAAAAoAAAAIAAAABQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/v7+47////////////////09PRxAAAACAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAIAAAAD+/v7kf////////////////b29m0AAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAP9/f2T///////////////++vr6aQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/39/Zb//////////v39/WkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAGAgIAC////lv39/WgAAAAC8AAAAOAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAHAAAADwAAAA8AAAAHAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAAAOAAAADwAAAA+AAAAPwAAAD+AAAA/wAAAA==),
    auto;
}
.next {
  right: 0;
  cursor: url(data:;base64,AAABAAEAEBwAAAEAIACYBwAAFgAAACgAAAAQAAAAOAAAAAEAIAAAAAAAAAcAABILAAASCwAAAAAAAAAAAAAAAAAG+fn5hfX19YEAAAAKAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAA+fn5gv//////////9fX1gwAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAP39/YL////////////////19fWEAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAD+/v7gv////////////////X19YUAAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAAAAAAAAgAAAAP7+/uA////////////////9vb2hwAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAEAAAABAAAAAQAAAAEAAAACAAAAA/v7+3/////////////////29vaIAAAACwAAAAkAAAAHAAAABQAAAAMAAAACAAAAAQAAAAEAAAABAAAAAQAAAAIAAAAD+/v7fv////////////////b29okAAAALAAAACQAAAAcAAAAFAAAAAwAAAAIAAAABAAAAAQAAAAEAAAABAAAAAgAAAAP7+/t8////////////////9vb2iwAAAAsAAAAJAAAABwAAAAUAAAADAAAAAgAAAAAAAAABAAAAAQAAAAEAAAACAAAAA/v7+3v////////////////29vaMAAAACwAAAAkAAAAHAAAABQAAAAMAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAIAAAAD+/v7ev////////////////b29o0AAAALAAAACQAAAAcAAAAFAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAP7+/t4////////////////9vb2jwAAAAsAAAAJAAAABgAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAACAAAABPn5+Xj////////////////29vaQAAAACgAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAQAAAAH9PT0ef////////////////j4+JAAAAAHAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAACAAAAAry8vJ5////////////////+/v7jwAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2iv////////////////v7+3QAAAAAAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9vb2iP////////////////v7+3cAAAADAAAAAQAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1hf////////////////v7+3oAAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1gv////////////////v7+30AAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1f/////////////////v7+4AAAAADAAAAAgAAAAEAAAABAAAAAgAAAAMAAAAFAAAABwAAAAkAAAAL9fX1fP////////////////v7+4MAAAADAAAAAgAAAAEAAAABAAAAAQAAAAMAAAAFAAAABwAAAAkAAAAL9PT0ef////////////////v7+4YAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAEAAAABgAAAAkAAAAK8vLyd/////////////////v7+4kAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAABQAAAAgAAAAK8vLydf////////////////v7+4sAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAYAAAAI9PT0cf////////////////v7+44AAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAF9vb2bf////////////////v7+5EAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAA+vr6af////7///////////39/ZMAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP39/Wr////+//////39/ZYAAAADAAAAAgAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/f39aP///5aAgIACAAAAAQAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAHAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAAAOAAAADwAAAA8AAAAOAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAHAAAADwAAAB8AAAA/AAAAfwAAAP8AAA==),
    auto;
}

.zoomout {
  width: 100%;
  cursor: zoom-out;
  z-index: 0;
}

.toggle-area {
  position: absolute;
  top: 0;
  width: calc(100% / 3);
  height: 100%;
  z-index: 1;
}
.toggle-area-zoomout {
  position: absolute;
  top: 0;
  height: 100%;
}
.flex-row-start-center {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.cursor-pointer {
  cursor: pointer;
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}
.action-bar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-size: 12px;
}
.object-cover {
  object-fit: cover;
}
</style>
