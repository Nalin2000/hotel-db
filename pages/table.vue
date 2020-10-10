<template>
  <div>
    <v-card color="#26c6da">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="list"
        :items-per-page="5"
        :search="search"
        class="elevation-3"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      search: '',
      list: [],
      headers: [
        {
          text: 'ชื่อผู้จอง',
          align: 'start',
          sortable: false,
          value: 'list.name',
        },
        {
          text: 'E-mail',
          value: 'email',
        },
        {
          text: 'เบอร์โทร',
          value: 'phone',
        },
        {
          text: 'ที่อยู่',
          value: 'address.add',
        },
        {
          text: 'ตำบล/แขวง',
          value: 'address.sub_district',
        },
        {
          text: 'อำเภอ/เขต',
          value: 'address.district',
        },
        {
          text: 'จังหวัด',
          value: 'address.province',
        },
        {
          text: 'จำนวนห้อง',
          value: 'room',
        },
        {
          text: 'จำนวนคน',
          value: 'costumers',
        },
        {
          text: 'จองวันที่',
          value: 'date_in',
        },
        {
          text: 'ถึงวันที่',
          value: 'date_out',
        },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('MyText')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.list = data
        })
    },
  },
}
</script>
