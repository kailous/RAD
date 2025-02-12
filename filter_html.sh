#!/bin/bash

# 检查是否提供了输入文件
if [ -z "$1" ]; then
  echo "请提供要处理的 HTML 文件"
  exit 1
fi

# 设置输入和输出文件
input_file="$1"
output_file="processed_$(basename "$input_file")"

# 使用 sed 来删除注释，保留 <img> 和 <iframe> 标签
sed -E '


  s|<!--\[-->| |g
  s|<!--\]-->| |g
  s|<!---->| |g

  # 保留 <img> 和 <iframe> 标签，删除其他标签
  /<(img|iframe)[^>]*>/!d

  # 删除 <a> 和 <div> 标签（不删除其内部内容）
  s|<a[^>]*>| |g
  s|</a>| |g
  s|<div[^>]*>| |g
  s|</div>| |g
  s|<section[^>]*>| |g
  s|</section>| |g
' "$input_file" > "$output_file"

echo "处理完成，结果已保存到 $output_file"