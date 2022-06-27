<template>
  <TabledivCom></TabledivCom>
  filter過後的email資料：{{setAry}}
</template>

<script>
import { onMounted, reactive } from "vue";
import TabledivCom from "../components/TabledivCom.vue";

export default {
  components: {
    TabledivCom,
  },
  setup() {
    const emails = reactive([
      "lisa@gmail.com",
      "lisa+1@gmail.com",
      "lisa+7@gmail.com",
      "lisa@gmail.com",
      "vicky@gmail.com",
      "kevin@gmail.com",
      "david@gmail.com",
    ]);

    // 建立一個 push值進去 會自動過濾重複的陣列
    const setAry = reactive(new Set())

    const filterEmails = () => {
      const tempAry = [];
      const correctEmailAry = [];
      emails.forEach((email) => {
        const splitEmail = email.split("");
        // ['l', 'i', 's', 'a', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm']
        
        // 將有＋的email 另外推到暫存陣列 => 待會有加的email全部刪除
        if (splitEmail.indexOf("+") !== -1) {
          tempAry.push(email);

          // email.forEach((e) => {
          //     const emailIndex = emails.indexOf(e)
          //     emails.splice(emailIndex, 1)
          //     console.log(emails);
          // })
          // console.log(splitEmail);

          // 將有+的email整理，把+號後內容刪除，留前面名字
          const index = splitEmail.indexOf("+");
          // console.log(index);
          // 從第個 0 個開始保留四個，餘全刪  (需用新變數接收)
          const sliceName = splitEmail.splice(1, index);
          // console.log(sliceName);
          // console.log(splitEmail);
          // 把陣列間逗點去除
          const correctName = sliceName.join("");
          // console.log(correctName);
          const correctEmail = correctName + "@gmail.com.tw";
          // console.log(correctEmail);
          correctEmailAry.push(correctEmail);
        }
      });
      emails.forEach((deleteEmail) => {
        let tempIndex = null;
        tempAry.forEach((temp) => {
          if (deleteEmail === temp) {
            tempIndex = emails.indexOf(deleteEmail);
            // console.log(tempIndex);
          }
        });
        emails.splice(tempIndex, 1);
        // console.log(emails);
      });
      const totalAry = [];
      // 將原mail 和整理後去除＋的mail 推到陣列中，去除重複
      totalAry.push(...emails, ...correctEmailAry);
      
      totalAry.forEach((total) => {
        setAry.add(total);
      });
    };
    onMounted(() => {
      filterEmails();
    });

    return {
      setAry
    };
  },
};
</script>
