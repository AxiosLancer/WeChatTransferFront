<template>
  <div>
    <el-table v-loading="loading" :data="transferlist" stripe>
      <el-table-column prop="type" label="快递类型" />
      <el-table-column prop="transfernum" label="取货码" />
      <el-table-column prop="transfername" label="取货人" />
      <el-table-column prop="telnumber" label="手机号码" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="time" label="下单时间" />
      <el-table-column prop="status" label="状态" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="onEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="onDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 确认删除的对话框 -->
    <el-dialog title="提示" :visible.sync="delDialogVisible" width="30%">
      <span>确定删除该歌单吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doDel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList } from '@/api/transfer'

export default {
  data() {
    return {
      transferlist: [],
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchList().then(response => {
        console.log(response)
        this.transferlist = response.data
      })
    }
  }
}
</script>
