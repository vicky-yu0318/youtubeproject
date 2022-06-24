<template>
  <div class="flex flex-col text-left">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <!-- head -->
            <slot name="header">
              <thead class="bg-white">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                    v-for="thead in theadOptions"
                    :key="thead"
                  >
                    {{ thead }}
                  </th>
                  <th scope="col" class="px-6 py-3 text-right">
                    <input type="checkbox" name="" id="" />
                    <label for="">coinOption</label>
                  </th>
                </tr>
              </thead>
            </slot>
            <!-- body-->
            <slot name="body">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="option in tbodyOptions" :key="option.name">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <!-- <img
                          class="h-10 w-10 rounded-full"
                          :src="
                          "
                          alt=""
                        /> -->
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ option.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ option.nick }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-md text-gray-900">
                      {{ option.availableFund }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-md text-gray-900">
                      {{ option.frozenFund }}
                    </div>
                  </td>
                  <td class="w-2/12 px-2 text-right">
                    <router-link
                      class="w-[64px] h-8 inline-block text-center leading-7 rounded-sm text-custcolor-primary-blue bg-white border-custcolor-primary-blue border-2"
                      to="/walletPage"
                      >{{ $t("coinOption.addedValue") }}</router-link
                    >
                    <router-link
                      class="w-[64px] h-8 inline-block ml-2 text-center leading-7 rounded-sm text-white bg-custcolor-primary-blue border-custcolor-primary-blue border-2"
                      to="/walletPage"
                      >{{ $t("coinOption.withdraw") }}</router-link
                    >
                    <router-link
                      class="w-[64px] h-8 inline-block ml-2 text-center leading-7 rounded-sm text-white bg-custcolor-secondary border-custcolor-secondary border-2"
                      to="/walletPage"
                      >{{ $t("coinOption.transfer") }}</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </slot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  components: {},
  //   props: {
  //     theadOptions: {
  //       type: Array,
  //       default: [],
  //     },
  //     tbodyOptions: {
  //       type: Array,
  //       default: [],
  //     }
  //   },
  setup() {
    const theadOptions = reactive([
      "quotes.time",
      "quotes.type",
      "quotes.tradingPair",
      "quotes.quantity",
      "quotes.price",
      "quotes.total",
      "quotes.progress",
    ]);
    const tbodyOptions = reactive([
    ])
    return {
        theadOptions,
        tbodyOptions
    };
  },
};
</script>
