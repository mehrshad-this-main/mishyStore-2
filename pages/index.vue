<script>
export default {
  layout: "index",
};
</script>
<template>
  <div>
    <v-sheet
      height="500"
      max-width="100%"
      class="mx-auto d-flex flex-row align-center my-4 mr-5"
    >
      <Coption
        class="my-4"
        title="محصولات ویژه"
        subTitle="تخفیف های باورنکردنی"
      />
      <v-sheet max-width="80%" class="mx-auto" color="transparent">
        <GrpSlider :obj="true" />
      </v-sheet>
    </v-sheet>
    <v-sheet
      class="d-flex flex-row justify-center my-16 pb-5"
      style="gap: 10px"
      width="100%"
    >
      <div class="d-flex">
        <v-img
          class="rounded-xl"
          aspect-ration="1"
          src="https://picsum.photos/seed/105/310/200"
        />
      </div>
      <div class="d-flex">
        <v-img
          class="rounded-xl"
          aspect-ration="1"
          src="https://picsum.photos/seed/107/310/200"
        />
      </div>
      <div class="d-flex">
        <v-img
          class="rounded-xl"
          aspect-ration="1"
          src="https://picsum.photos/seed/106/650/200"
        />
      </div>
    </v-sheet>
    <div class="mx-auto d-flex flex-column align-center mt-16">
      <v-icon x-large color="accent">mdi-dialpad</v-icon>
      <span style="font-size: large">جدید ترین ها</span>
      <span style="font-size: small">لورم اسپیچ لورم اسپیچ لورم </span>
      <GrpSlider :obj="false" />
    </div>
    <div class="mx-auto d-flex" style="height: 200px">
      <div class="c-div d-flex justify-center align-center">
        <span class="d-flex siteN myF">MishyStore</span>
        <div class="inner d-flex flex-row align-center justify-space-between">
          <div class="myF mx-3" style="font-size: x-large">
            امار گویای ان است که چرامارابایدانتخات کنید
          </div>
          <div>
            <img
              src="../assets/icon/left-arrow-svgrepo-com.svg"
              width="50"
              alt="left"
            />
          </div>
          <div class="d-flex flex-row ml-3" style="gap: 20px">
            <div class="mx-auto num d-flex align-center justify-center">
              <span class="primaryFont">988+</span> تعداد فروش
            </div>
            <div class="mx-auto num d-flex align-center justify-center">
              <span class="primaryFont">500+</span> تنوع محصولات
            </div>
            <div class="mx-auto num d-flex align-center justify-center">
              <span class="primaryFont">89%</span> رضایت مشتریان
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-sheet class="d-flex align-center" height="300" width="100%">
      <v-container
        class="d-flex flex-row align-center justify-space-between gr rounded"
      >
        <div>
          <div style="font-size: x-large; color: blanchedalmond">
            زمستان تمام شد، اما فروش بهاره ما تازه شروع شده است!
          </div>
          <div style="font-size: small">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از
            <br />طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطر چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر
          </div>
          <div class="pa-3">
            <v-btn color="info" outlined class="rounded-pill" large>
              دیدن همه محصولات
              <img
                class="mx-2"
                src="../assets/icon/left-arrow-svgrepo-com.svg"
                width="20"
                alt="left"
              />
            </v-btn>
            <v-btn color="info" large outlined class="rounded-pill">
              تماس با ما
              <img
                class="mx-2"
                src="../assets/icon/left-arrow-svgrepo-com.svg"
                width="20"
                alt="left"
              />
            </v-btn>
          </div>
        </div>
        <div>
          <img
            width="80"
            style="transform: rotateZ(45px) rotate3d(1, 1, 1, 45deg)"
            src="../assets/icon/cart-large-minimalistic-svgrepo-com.svg"
          />
        </div>
      </v-container>
    </v-sheet>
    <v-sheet
      width="100%"
      height="500"
      class="mx-auto d-flex flex-row align-center my-4 ml-4"
    >
      <v-sheet max-width="80%" class="mx-auto" color="transparent">
        <GrpSlider obj />
      </v-sheet>
      <Coption
        class="my-4 ml-5"
        title="پرفروش ترن ها"
        subTitle="یعنی بهترین ها"
      />
    </v-sheet>
    <div class="d-flex justify-center flex-column align-center my-16">
      <v-icon x-large class="my-4" color="accent">mdi-newspaper</v-icon>
      <span style="font-size: large"> وبلاگ</span>
      <span style="font-size: small">لورم اسپیچ لورم اسپیچ لورم </span>
    </div>
    <div class="d-flex justify-center flex-row align-center my-16 pb-16">
      <v-card
        v-for="i in 4"
        class="d-flex rounded align-center flex-column mx-1"
        :key="i"
      >
        <v-img
          width="290"
          class="ma-4 rounded"
          height="170"
          contain
          src="https://picsum.photos/seed/1015/300/170"
        />
        <v-card-title>لورم ایپسوم متن ساختگی</v-card-title>
        <v-card-subtitle
          >لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
          روزنامه و مجله در شرایط فعلی تکنولوژی مورد نیاز ...
        </v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>
<style>
.num {
  width: 175px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
}

.c-div {
  background: #bea9c5;
  width: 250px;
  height: 100px;
  border-radius: 50px;
  margin: auto;
  position: relative;
  transition: all 1s ease-in-out;
}

.c-div:hover {
  width: 95%;
  background: #3c286b;
  border-radius: 10px;
}

.inner {
  opacity: 0;
  visibility: hidden;
  transition: all 2s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.c-div:hover .inner {
  opacity: 1;
  visibility: visible;
}

.inner div {
  display: none;
}

.inner:hover div {
  display: block;
}

.c-div .siteN {
  color: #51367b;
  position: absolute;
  font-size: x-large;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.c-div:hover .siteN {
  opacity: 0;
}
</style>
