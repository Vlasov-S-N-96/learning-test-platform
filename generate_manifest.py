#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Генератор manifest.json для документов.
Сканирует папку documents/ и создаёт список всех файлов по категориям.

Запуск:
    python generate_manifest.py
"""

import os
import json
import sys

# ═══════════════════════════════════════════════════════════
#  НАСТРОЙКИ
# ═══════════════════════════════════════════════════════════
DOCUMENTS_DIR = 'documents'
OUTPUT_FILE = os.path.join(DOCUMENTS_DIR, 'manifest.json')

CATEGORIES = [
    'theory', 'formal', 'scenario', 'methods', 'levels',
    'functional', 'nonfunctional', 'testdesign', 'documentation',
    'api', 'web', 'scrum', 'kanban', 'requirements',
    'sql', 'python', 'interview', 'mobile'
]

ALLOWED_EXTENSIONS = {
    '.pdf', '.doc', '.docx', '.xls', '.xlsx',
    '.ppt', '.pptx', '.txt', '.csv', '.zip'
}

SKIP_FILES = {'.gitkeep', '.DS_Store', 'Thumbs.db', 'manifest.json'}


def should_include(filename):
    """Проверяет, надо ли включать файл в manifest."""
    if filename.startswith('.'):
        return False
    if filename in SKIP_FILES:
        return False
    ext = os.path.splitext(filename)[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        return False
    return True


def scan_documents():
    """Сканирует папку documents/ и возвращает структуру."""
    if not os.path.isdir(DOCUMENTS_DIR):
        print(f'❌ Папка "{DOCUMENTS_DIR}" не найдена!')
        sys.exit(1)

    manifest = {}
    total_files = 0

    for category in CATEGORIES:
        cat_path = os.path.join(DOCUMENTS_DIR, category)

        if not os.path.isdir(cat_path):
            continue

        files = []
        for filename in sorted(os.listdir(cat_path)):
            if should_include(filename):
                files.append(filename)

        if files:
            manifest[category] = files
            total_files += len(files)
            print(f'📁 {category}: {len(files)} файл(ов)')
            for f in files:
                print(f'     └─ {f}')

    return manifest, total_files


def save_manifest(manifest):
    """Сохраняет manifest.json."""
    try:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(manifest, f, ensure_ascii=False, indent=2)
        print(f'\n✅ Сохранено: {OUTPUT_FILE}')
    except Exception as e:
        print(f'❌ Ошибка сохранения: {e}')
        sys.exit(1)


def main():
    print('🔍 Сканирование папки documents/...\n')

    manifest, total = scan_documents()
    save_manifest(manifest)

    print(f'\n📊 ИТОГО:')
    print(f'   Категорий: {len(manifest)}')
    print(f'   Файлов: {total}')

    if total == 0:
        print('\n⚠️  Файлов не найдено. Положите документы в папки:')
        print('   documents/{category}/файл.pdf')
    else:
        print('\n💡 Теперь сделайте:')
        print('   git add documents/manifest.json')
        print('   git commit -m "Обновлён manifest.json"')
        print('   git push')


if __name__ == '__main__':
    main()