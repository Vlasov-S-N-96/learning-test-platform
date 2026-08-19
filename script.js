<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Тестирование ПО — Полная схема для собеседований</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <div class="container">
         <!-- ===== ПАНЕЛЬ УПРАВЛЕНИЯ СХЕМАМИ ===== -->
        <div class="schema-controls">
            <button class="toggle-schema-btn" data-target="testingSchema">Схема тестирования</button>
            <button class="toggle-schema-btn" data-target="algorithmBlock">Алгоритм тестирования</button>
            <button class="toggle-schema-btn" data-target="scrumSchema">Scrum схема</button>
            <button class="toggle-schema-btn" data-target="kanbanSchema">Kanban схема</button>
        </div>

        <!-- ===== ВИЗУАЛЬНАЯ СХЕМА ТЕСТИРОВАНИЯ ПО ===== -->
        <div class="testing-schema hidden" id="testingSchema">
            <div class="testing-title">Схема тестирования ПО</div>
            
            <div class="testing-grid">
                <!-- Степень формализации -->
                <div class="testing-section formalization">
                    <div class="section-header">Степень формализации</div>
                    <div class="section-items">
                        <span class="item purple">Исследовательское</span>
                        <span class="item blue">На основе тест-кейсов</span>
                        <span class="item orange">Ad-hoc (свободное)</span>
                    </div>
                </div>

                <!-- Методы -->
                <div class="testing-section methods">
                    <div class="section-header">Методы (Как?)</div>
                    <div class="method-group">
                        <div class="method-subtitle">Сценарии</div>
                        <div class="section-items">
                            <span class="item green">Happy Path</span>
                            <span class="item red">Negative</span>
                            <span class="item orange">Destructive</span>
                        </div>
                    </div>
                    <div class="method-group">
                        <div class="method-subtitle">Доступ к коду</div>
                        <div class="section-items">
                            <span class="item blue">Чёрный ящик</span>
                            <span class="item teal">Серый ящик</span>
                            <span class="item purple">Белый ящик</span>
                        </div>
                    </div>
                </div>

                <!-- Уровни -->
                <div class="testing-section levels">
                    <div class="section-header">Уровни (Где я нахожусь?)</div>
                    <div class="level-items">
                        <span class="item green">Модульное</span>
                        <span class="item blue">Интеграционное</span>
                        <span class="item purple">Системное</span>
                    </div>
                    <div class="level-divider">Приёмочное (Acceptance)</div>
                    <div class="level-subgroups">
                        <div class="level-subgroup">
                            <span class="level-label">Когда и где:</span>
                            <span class="item orange">Альфа</span>
                            <span class="item orange">Бета</span>
                        </div>
                        <div class="level-subgroup">
                            <span class="level-label">Что и почему:</span>
                            <span class="item teal">Нормативное</span>
                            <span class="item teal">Контрактное</span>
                            <span class="item teal">Эксплуатационное</span>
                            <span class="item teal">Пользовательское</span>
                        </div>
                    </div>
                </div>

                <!-- Функциональное -->
                <div class="testing-section functional">
                    <div class="section-header">Функциональное (Что?)</div>
                    <div class="section-items">
                        <span class="item red">Regression</span>
                        <span class="item orange">Smoke</span>
                        <span class="item blue">Sanity</span>
                        <span class="item purple">GUI</span>
                        <span class="item teal">Безопасность</span>
                        <span class="item green">Installation</span>
                    </div>
                </div>

                <!-- Нефункциональное -->
                <div class="testing-section nonfunctional">
                    <div class="section-header">Нефункциональное (Качество)</div>
                    <div class="section-items">
                        <span class="item purple">Производительность</span>
                        <span class="item orange">Конкурентное</span>
                        <span class="item teal">Объёмное</span>
                        <span class="item blue">Масштабируемость</span>
                        <span class="item red">Стрессовое</span>
                        <span class="item green">Удобство</span>
                        <span class="item green">Совместимость</span>
                        <span class="item green">Надёжность</span>
                        <span class="item green">Доступность (A11Y)</span>
                        <span class="item green">Локализация</span>
                        <span class="item green">Интернационализация</span>
                    </div>
                </div>
            </div>

            <button class="toggle-interview-btn" data-target="interview-testing">Ответ на собеседовании</button>
            <div id="interview-testing" class="interview-answer" style="display:none;">
                <h4>Как рассказать о схеме тестирования на собеседовании:</h4>
                
                <p><strong>Вступление:</strong>Тестирование – это не просто поиск багов. Это комплексный процесс, который помогает нам понять, насколько продукт соответствует ожиданиям пользователей, работает ли он так, как задумано, и готов ли он к релизу. Мы проверяем не только функции, но и качество – скорость, безопасность, удобство, надёжность. И делаем это на всех этапах разработки – от модуля до готовой системы.</p>
                
                <p><strong>1. По уровню (где мы находимся):</strong></p>
                <ul>
                    <li><strong>Модульное (Unit)</strong> – проверяем отдельные функции, классы, методы. Пишут разработчики, часто с использованием фреймворков (JUnit, pytest). Это самый быстрый и дешёвый способ найти ошибку – на уровне "кирпичика".</li>
                    <li><strong>Интеграционное</strong> – проверяем, как модули общаются друг с другом. Например, API, база данных, внешние сервисы. Здесь мы ловим проблемы с форматами данных, таймаутами, авторизацией.</li>
                    <li><strong>Системное (E2E)</strong> – проверяем всю систему целиком, как реальный пользователь. Это самый медленный и дорогой уровень, но он даёт уверенность, что "всё вместе работает".</li>
                    <li><strong>Приёмочное (Acceptance)</strong> – финальная проверка заказчиком или пользователями. Здесь мы отвечаем на вопрос: "А ту ли задачу мы решаем?". Бывает альфа (внутреннее, на мощностях разработчика, но с независимой командой), бета (внешнее, реальные пользователи), а также нормативное (по законам), контрактное (по договору), эксплуатационное (готовность к работе в реальных условиях) и пользовательское (UAT – User Acceptance Testing).</li>
                </ul>
                
                <p><strong>2. По методу доступа к коду:</strong></p>
                <ul>
                    <li><strong>Чёрный ящик</strong> – мы не знаем внутреннего устройства, проверяем только входы и выходы. Как пользователь. Используем для функционального, UI, API-тестирования.</li>
                    <li><strong>Белый ящик</strong> – видим код, знаем структуру. Проверяем пути выполнения, условия, циклы. Применяем для модульных тестов, статического анализа.</li>
                    <li><strong>Серый ящик</strong> – что-то среднее. Знаем архитектуру, но не все детали. Например, знаем, что данные хранятся в БД, и можем проверить их напрямую, но не смотрим реализацию бизнес-логики.</li>
                </ul>
                
                <p><strong>3. По степени формализации:</strong></p>
                <ul>
                    <li><strong>На основе тест-кейсов</strong> – всё расписано заранее: шаги, данные, ожидаемый результат. Повторяемо, подходит для регрессии, можно автоматизировать.</li>
                    <li><strong>Исследовательское</strong> – мы не пишем тест-кейсы, а исследуем систему, ищем неочевидные баги. Хорошо работает, когда нет документации или нужно быстро проверить новую фичу.</li>
                    <li><strong>Ad-hoc</strong> – свободное, интуитивное тестирование. "А что будет, если нажать сюда?" – часто находит баги, которые не покрыты сценариями.</li>
                </ul>
                
                <p><strong>4. По типу проверяемых характеристик:</strong></p>
                <ul>
                    <li><strong>Функциональное</strong> – проверяем, что система делает то, что должна. Здесь: <strong>Smoke</strong> (быстрая проверка критических функций после сборки), <strong>Sanity</strong> (проверка, что исправление работает и не сломало основное), <strong>Регрессия</strong> (проверка, что новый код не сломал старое), <strong>GUI</strong> (интерфейс – цвета, размеры, шрифты), <strong>Безопасность</strong> (проверка уязвимостей), <strong>Installation</strong> (установка, обновление, удаление).</li>
                    <li><strong>Нефункциональное</strong> – проверяем качество: <strong>Производительность</strong> (скорость), <strong>Нагрузочное</strong> (работа при ожидаемом количестве пользователей), <strong>Стрессовое</strong> (точка отказа), <strong>Объёмное</strong> (большие данные), <strong>Масштабируемость</strong> (способность расти), <strong>Конкурентное</strong> (одновременные запросы), <strong>Удобство</strong> (UX – понятность, обучаемость), <strong>Совместимость</strong> (браузеры, ОС, устройства), <strong>Надёжность</strong> (стабильность, восстановление), <strong>Доступность (A11Y)</strong> (для людей с ограничениями), <strong>Локализация</strong> (перевод, культура), <strong>Интернационализация</strong> (готовность к переводу).</li>
                </ul>
                
                <p><strong>Заключение:</strong> «На практике мы комбинируем эти подходы. Например, для нового функционала – исследовательское + чёрный ящик + функциональное. Для регрессии – автоматизированные тест-кейсы + регрессия. Для критичных систем – добавляем нагрузку, безопасность, совместимость. Главное – выбирать то, что даёт максимальную ценность при минимальных затратах.»</p>
            </div>
        </div>

                <!-- ===== БЛОК АЛГОРИТМА ===== -->
        <div class="algorithm-block hidden" id="algorithmBlock">
            <div class="algorithm-title">Как применять тестирование ПО на практике</div>
            <div class="algorithm-steps">
                <div class="step">
                    <span class="step-num">1</span>
                    <span class="step-text"><strong>Начинаем с планирования</strong></span>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <span class="step-num">2</span>
                    <span class="step-text"><strong>Определяем глубину</strong></span>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <span class="step-num">3</span>
                    <span class="step-text"><strong>Протестируем функции</strong></span>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <span class="step-num">4</span>
                    <span class="step-text"><strong>Проверим качество</strong></span>
                </div>
                <div class="step-arrow">→</div>
                <div class="step">
                    <span class="step-num">5</span>
                    <span class="step-text"><strong>Решаем: Release or Stop</strong></span>
                </div>
            </div>

            <div class="algorithm-footer">
                <div class="always-block">
                    <span class="block-label"><strong>Делаем всегда</strong></span>
                    <div class="block-tags">
                        <span class="tag-green">Smoke</span>
                        <span class="tag-orange">Sanity</span>
                        <span class="tag-blue">Регрессия</span>
                        <span class="hidden-tag">Скрыто</span>
                        <span class="hidden-tag">Скрыто</span>
                    </div>
                </div>
                <div class="always-block">
                    <span class="block-label"><strong>По необходимости</strong></span>
                    <div class="block-tags">
                        <span class="tag-purple">Нагрузочное</span>
                        <span class="tag-orange">Стрессовое</span>
                        <span class="tag-red">Безопасность</span>
                        <span class="tag-green">Usability</span>
                        <span class="tag-teal">Совместимость</span>
                    </div>
                </div>
            </div>

            <button class="toggle-interview-btn" data-target="interview-algorithm">Ответ на собеседовании</button>
            <div id="interview-algorithm" class="interview-answer" style="display:none;">
                <h4>Как рассказать о практическом алгоритме тестирования на собеседовании:</h4>
                
                <p><strong>Введение:</strong> «Когда я начинаю тестировать новую функцию или проект, я следую определённому алгоритму, чтобы ничего не упустить. Вот как это выглядит на практике.»</p>

                <p><strong>Шаг 1: Планирование</strong> – «Сначала я изучаю требования: что должно работать, какие есть сценарии. Если требований нет – общаюсь с аналитиком или разработчиком, задаю вопросы. Определяю цели тестирования: что мы проверяем, какие риски есть. Составляю тест-план: объём, ресурсы, сроки, критерии входа и выхода.»</p>

                <p><strong>Шаг 2: Определяем глубину</strong> – «На основе рисков я выбираю приоритетные области. Например, если это модуль оплаты – я проверяю его в первую очередь, потому что ошибка там критична. Использую тест-дизайн: эквивалентное разбиение и граничные значения, чтобы сократить количество тестов, не потеряв покрытие.»</p>

                <p><strong>Шаг 3: Функциональное тестирование</strong> – «Сначала я запускаю Smoke-тесты – проверяю, что основные функции работают. Затем Sanity – убеждаюсь, что новый код не сломал старое. После этого провожу полное функциональное тестирование: все сценарии (Happy Path, Negative, Destructive), проверяю GUI, безопасность (если нужно), установку. В конце – регрессия, чтобы убедиться, что изменения не повлияли на другие части системы.»</p>

                <p><strong>Шаг 4: Проверка качества (нефункциональное)</strong> – «Здесь я смотрю на производительность: как быстро открываются страницы, сколько времени занимает запрос. Если нужно – провожу нагрузочное тестирование (например, симулирую 1000 пользователей). Проверяю удобство: может ли новый пользователь разобраться без помощи. Совместимость: работает ли в разных браузерах и на мобильных устройствах. Безопасность: проверяю основные уязвимости (SQL-инъекции, XSS).»</p>

                <p><strong>Шаг 5: Решение о релизе</strong> – «Анализирую результаты: сколько тестов пройдено, сколько багов найдено, их серьёзность. Если есть критичные баги – релиз откладываю. Если все критические и мажорные баги исправлены – даю зелёный свет. Готовлю отчёт о тестировании для команды и заказчика.»</p>

                <p><strong>Важный нюанс:</strong> Smoke, Sanity и регрессию я делаю при каждом релизе – это база. Нагрузочное, стрессовое, безопасность – по необходимости, <strong>например</strong>, перед крупными релизами или при изменении архитектуры. Мы также всегда учитываем <strong>контекст</strong>: для банковского приложения безопасность и надёжность критичны, для игры – производительность, для стартапа – скорость выхода на рынок.</p>
            </div>
        </div>

                <!-- ===== ВИЗУАЛЬНАЯ СХЕМА SCRUM ===== -->
        <div class="scrum-schema hidden" id="scrumSchema">
            <div class="scrum-title">Структура Scrum</div>
            <div class="schema-container">
                <div class="scrum-values">
                    <span class="value-badge">Приверженность</span>
                    <span class="value-badge">Фокус</span>
                    <span class="value-badge">Открытость</span>
                    <span class="value-badge">Уважение</span>
                    <span class="value-badge">Смелость</span>
                </div>

                <div class="scrum-backlogs">
                    <div class="backlog-col">
                        <div class="backlog-title">Product Backlog</div>
                        <ul class="backlog-items">
                            <li>Регистрация</li>
                            <li>Фильтр по цене</li>
                            <li>Оплата картой</li>
                            <li class="backlog-owner">(ведет Product Owner)</li>
                        </ul>
                    </div>
                    <div class="backlog-arrow">→</div>
                    <div class="backlog-col">
                        <div class="backlog-title">Sprint Backlog</div>
                        <ul class="backlog-items">
                            <li>Сверстать форму</li>
                            <li>Написать тесты</li>
                            <li>Протестировать GUI</li>
                            <li class="backlog-goal">Sprint Goal</li>
                        </ul>
                    </div>
                </div>

                <div class="sprint-container">
                    <div class="sprint-title">Sprint (1-4 недели)</div>
                    <div class="sprint-content">
                        <div class="daily-scrum">
                            <div class="daily-title">Daily Scrum (ежедневно)</div>
                            <ul class="daily-items">
                                <li>Что сделано?</li>
                                <li>Что сегодня?</li>
                                <li>Препятствия?</li>
                            </ul>
                        </div>

                        <div class="refinement-block">
                            <div class="refinement-title">Backlog Refinement</div>
                            <ul>
                                <li>Уточнение требований</li>
                                <li>Оценка (покер планирования)</li>
                            </ul>
                        </div>

                        <div class="dev-block">
                            <div class="dev-title">Development &amp; Testing</div>
                            <div class="dev-tags">
                                <span>Код</span>
                                <span>Функциональное</span>
                                <span>Интеграционное</span>
                                <span>Регресс</span>
                                <span>Автотесты</span>
                                <span>Исследовательское</span>
                            </div>
                            <div class="kanban-board">
                                <span>To Do</span>
                                <span class="arrow">→</span>
                                <span>In Progress</span>
                                <span class="arrow">→</span>
                                <span>Ready for Test</span>
                                <span class="arrow">→</span>
                                <span>Done</span>
                            </div>
                        </div>

                        <div class="bug-triage">
                            <span>Bug Triage (по нужде)</span>
                            <span class="sub">Приоритизация багов</span>
                        </div>

                        <div class="review-block">
                            <div class="review-title">Sprint Review</div>
                            <ul>
                                <li>Демо версия инкремента заказчику</li>
                                <li>Сбор обратной связи</li>
                            </ul>
                        </div>

                        <div class="retro-block">
                            <div class="retro-title">RETROSPECTIVE</div>
                            <ul>
                                <li>Что хорошо?</li>
                                <li>Что улучшить?</li>
                                <li>План действий</li>
                            </ul>
                        </div>

                        <div class="increment-block">
                            <div class="increment-title">Increment</div>
                            <ul>
                                <li>Протестирован</li>
                                <li>Соответствует DoD</li>
                                <li>Готов к релизу</li>
                            </ul>
                        </div>

                        <div class="next-sprint">Next Sprint →</div>
                    </div>
                </div>
            </div>

            <button class="toggle-interview-btn" data-target="interview-scrum">Ответ на собеседовании</button>
            <div id="interview-scrum" class="interview-answer" style="display:none;">
                <h4>Как рассказать о Scrum на собеседовании:</h4>

                <p><strong>Введение:</strong> «Scrum – это фреймворк для гибкой разработки, который помогает нам создавать качественный продукт в условиях постоянно меняющихся требований. В основе Scrum лежат ценности: приверженность, фокус, открытость, уважение и смелость. Давайте я расскажу о ролях, артефактах и событиях.»</p>

                <p><strong>Роли в Scrum:</strong></p>
                <ul>
                    <li><strong>Product Owner (PO)</strong> – отвечает за то, ЧТО мы делаем и ПОЧЕМУ. Он общается с заказчиками, собирает требования, формирует Product Backlog и расставляет приоритеты. PO – это голос бизнеса внутри команды.</li>
                    <li><strong>Scrum Master (SM)</strong> – помогает команде быть эффективной. Он не управляет, а фасилитирует процессы: следит, чтобы Daily Scrum не затягивался, убирает препятствия (например, если разработчик не может настроить окружение), обучает команду Scrum, защищает от внешних помех.</li>
                    <li><strong>Developers</strong> – вся команда, создающая продукт: разработчики, тестировщики, аналитики, дизайнеры. Они сами планируют работу в спринте, следят за качеством и несут коллективную ответственность за результат.</li>
                </ul>

                <p><strong>Артефакты Scrum:</strong></p>
                <ul>
                    <li><strong>Product Backlog</strong> – постоянно обновляемый список всех задач, идей, требований к продукту. Им управляет PO. Задачи отсортированы по приоритету – самые важные наверху.</li>
                    <li><strong>Sprint Backlog</strong> – список задач, которые команда взяла на текущий спринт. Это результат Sprint Planning. В течение спринта команда сама управляет этим списком.</li>
                    <li><strong>Increment</strong> – готовый, протестированный и соответствующий Definition of Done результат спринта. Это не «почти готово», а полностью работающая фича, которую можно показать заказчику.</li>
                </ul>

                <p><strong>События (церемонии):</strong></p>
                <ul>
                    <li><strong>Sprint Planning</strong> – встреча в начале спринта (обычно 2–4 часа). Команда и PO выбирают задачи из Product Backlog, оценивают их в Story Points (покер-планирование) и формируют Sprint Backlog. Также определяют Sprint Goal – цель, к которой идёт команда.</li>
                    <li><strong>Daily Scrum (Stand-up)</strong> – ежедневная 15-минутная встреча. Каждый отвечает на три вопроса: что сделал вчера, что сделает сегодня, какие есть препятствия. Это не отчёт для менеджера, а синхронизация команды.</li>
                    <li><strong>Sprint Review</strong> – демонстрация инкремента заказчику в конце спринта. Команда показывает, что сделано, собирает обратную связь, которая попадает в Product Backlog.</li>
                    <li><strong>Sprint Retrospective</strong> – внутренняя встреча команды после Review. Анализируем, что прошло хорошо, что можно улучшить, выбираем 1-2 действия для следующего спринта. Это ключевой элемент для постоянного совершенствования.</li>
                    <li><strong>Backlog Refinement (Grooming)</strong> – регулярная встреча для уточнения и переоценки задач в Product Backlog. Обычно проходит раз в неделю.</li>
                    <li><strong>Bug Triage</strong> – встреча для приоритизации багов: какие исправлять сейчас, какие отложить.</li>
                </ul>

                <p><strong>Оценка и метрики:</strong></p>
                <ul>
                    <li><strong>Story Points</strong> – абстрактные единицы оценки сложности (часто числа Фибоначчи: 1, 2, 3, 5, 8, 13). Не привязаны к часам, помогают сравнивать задачи.</li>
                    <li><strong>Покер-планирование</strong> – техника оценки, где каждый участник показывает карту с числом, затем обсуждают расхождения и приходят к консенсусу.</li>
                    <li><strong>Velocity</strong> – сколько Story Points команда выполняет за спринт в среднем (факт). Используется для планирования следующего спринта.</li>
                    <li><strong>Capacity</strong> – прогноз, сколько работы команда может взять в текущем спринте с учётом отпусков и праздников.</li>
                    <li><strong>Burndown Chart</strong> – график, показывающий, сколько работы осталось до конца спринта. Помогает отслеживать прогресс.</li>
                </ul>

                <p><strong>Отличие от Kanban:</strong> «Scrum работает спринтами, задачи фиксируются на время спринта. В Kanban – непрерывный поток, задачи можно менять в любой момент. Scrum больше подходит для проектов с неопределёнными требованиями, Kanban – для поддержки и оперативных задач.»</p>
            </div>
        </div>

        <!-- ===== ВИЗУАЛЬНАЯ СХЕМА KANBAN ===== -->
        <div class="kanban-schema hidden" id="kanbanSchema">
            <div class="kanban-title">Структура Kanban</div>
            <div class="schema-container">
                <div class="kanban-values">
                    <span class="value-badge">Прозрачность</span>
                    <span class="value-badge">Баланс</span>
                    <span class="value-badge">Сотрудничество</span>
                    <span class="value-badge">Ориентация на клиента</span>
                    <span class="value-badge">Поток</span>
                    <span class="value-badge">Лидерство</span>
                    <span class="value-badge">Понимание</span>
                    <span class="value-badge">Согласие</span>
                    <span class="value-badge">Уважение</span>
                </div>

                <div class="kanban-board-full">
                    <div class="board-title">Kanban-доска</div>
                    <div class="board-columns">
                        <div class="board-col">
                            <div class="col-header">To Do</div>
                            <div class="col-items">
                                <span>Задача 1</span>
                                <span>Задача 2</span>
                            </div>
                            <div class="wip-limit">WIP: 3</div>
                        </div>
                        <div class="col-arrow">→</div>
                        <div class="board-col">
                            <div class="col-header">In Progress</div>
                            <div class="col-items">
                                <span>Задача 3</span>
                            </div>
                            <div class="wip-limit">WIP: 2</div>
                        </div>
                        <div class="col-arrow">→</div>
                        <div class="board-col">
                            <div class="col-header">Review</div>
                            <div class="col-items">
                                <span>Задача 4</span>
                                <span>Задача 5</span>
                            </div>
                            <div class="wip-limit">WIP: 2</div>
                        </div>
                        <div class="col-arrow">→</div>
                        <div class="board-col">
                            <div class="col-header">Done</div>
                            <div class="col-items">
                                <span>Задача 6</span>
                                <span>Задача 7</span>
                                <span>Задача 8</span>
                            </div>
                            <div class="wip-limit">—</div>
                        </div>
                    </div>
                    <div class="pull-system">Pull-система: задачи «вытягиваются» по мере готовности</div>
                </div>

                <div class="kanban-metrics-roles">
                    <div class="metrics-block">
                        <div class="metrics-title">Метрики</div>
                        <ul>
                            <li><strong>Lead Time</strong> — время от запроса до поставки</li>
                            <li><strong>Customer Lead Time</strong> — время ожидания клиента</li>
                            <li><strong>Delivery Rate</strong> — скорость поставки (задач/период)</li>
                            <li><strong>Cycle Time</strong> — время выполнения одной задачи</li>
                        </ul>
                    </div>
                    <div class="roles-block">
                        <div class="roles-title">Роли</div>
                        <ul>
                            <li><strong>Менеджер Запросов (SRM)</strong> — отвечает за «что» делаем, приоритеты</li>
                            <li><strong>Менеджер Поставки (SDM)</strong> — отвечает за «как» делаем, поток, WIP</li>
                        </ul>
                    </div>
                </div>

                <div class="kanban-cadences">
                    <div class="cadences-title">Каденции (регулярные встречи)</div>
                    <div class="cadences-list">
                        <span>Kanban-митинг</span>
                        <span>Собрание по пополнению</span>
                        <span>Ревью сервиса поставки</span>
                        <span>Ревью рисков</span>
                        <span>Операционное ревью</span>
                    </div>
                </div>
            </div>

            <button class="toggle-interview-btn" data-target="interview-kanban">Ответ на собеседовании</button>
            <div id="interview-kanban" class="interview-answer" style="display:none;">
                <h4>Как рассказать о Kanban на собеседовании:</h4>

                <p><strong>Введение:</strong> «Kanban – это метод управления потоком работы, который помогает нам визуализировать процесс, ограничивать незавершённую работу и улучшать эффективность. Его главная идея – "вытягивание" задач, а не "проталкивание". Давайте я расскажу подробнее.»</p>

                <p><strong>Ценности Kanban:</strong> «Прозрачность (все видят доску), баланс (не перегружаем команду), сотрудничество (совместное решение проблем), ориентация на клиента (что важно для заказчика), поток (непрерывное движение), лидерство на всех уровнях, понимание текущего состояния, согласие (все решения принимаются консенсусом) и уважение друг к другу.»</p>

                <p><strong>Kanban-доска:</strong> «Визуализация процесса – это основа. Обычно у нас есть колонки: To Do, In Progress, Review, Done. Каждая задача – это карточка, которая перемещается по доске. Это позволяет сразу видеть, где заторы, сколько задач в работе.»</p>

                <p><strong>WIP-лимиты (Work In Progress):</strong> «Мы ограничиваем количество задач в каждой колонке. Например, в In Progress не больше 3 задач. Это помогает не распыляться, быстрее завершать начатое и находить узкие места. Если в какой-то колонке накапливаются задачи – значит, там проблема, которую нужно решить.»</p>

                <p><strong>Pull-система:</strong> «В отличие от push-системы (когда задачи "проталкиваются" в работу), в Kanban команда "вытягивает" новую задачу только тогда, когда освобождается место. Это предотвращает перегрузку и улучшает поток.»</p>

                <p><strong>Метрики:</strong></p>
                <ul>
                    <li><strong>Lead Time</strong> – время от момента, когда задача попала в бэклог, до её завершения. Показывает общую эффективность.</li>
                    <li><strong>Customer Lead Time</strong> – время ожидания клиента от запроса до получения результата. Важно для SLA.</li>
                    <li><strong>Delivery Rate</strong> – сколько задач команда завершает за неделю/месяц. Помогает прогнозировать.</li>
                    <li><strong>Cycle Time</strong> – время, которое задача находится в активной работе (с момента начала до готовности).</li>
                </ul>

                <p><strong>Роли в Kanban:</strong> (их может и не быть, но в классическом Kanban есть две ключевые роли)</p>
                <ul>
                    <li><strong>Менеджер Запросов (Service Request Manager, SRM)</strong> – отвечает за «что» мы делаем: общается с заказчиком, собирает запросы, определяет приоритеты. Аналог Product Owner в Scrum.</li>
                    <li><strong>Менеджер Поставки (Service Delivery Manager, SDM)</strong> – отвечает за «как» мы делаем: следит за потоком, WIP-лимитами, помогает устранять препятствия. Аналог Scrum Master.</li>
                </ul>

                <p><strong>Каденции (регулярные встречи):</strong></p>
                <ul>
                    <li><strong>Kanban-митинг</strong> – ежедневная синхронизация (аналог Daily Scrum). Смотрим на доску, обсуждаем проблемные задачи.</li>
                    <li><strong>Собрание по пополнению</strong> – ревью запросов, добавление новых задач в бэклог.</li>
                    <li><strong>Ревью сервиса поставки</strong> – анализ метрик, обсуждение улучшений процесса.</li>
                    <li><strong>Ревью рисков</strong> – оценка потенциальных проблем.</li>
                    <li><strong>Операционное ревью</strong> – общий взгляд на проект, стратегические решения.</li>
                </ul>

                <p><strong>Отличие Kanban от Scrum:</strong> «В Scrum мы работаем спринтами с фиксированным набором задач. В Kanban – непрерывный поток, задачи можно добавлять и менять приоритеты в любой момент. Kanban больше подходит для поддержки, оперативных задач и проектов с постоянно меняющимися приоритетами. Scrum – для разработки новых функций, где нужна планирование и оценка.»</p>
            </div>
        </div>

        <!-- ===== ПАНЕЛЬ УПРАВЛЕНИЯ ТЕРМИНАМИ ===== -->
        <div class="controls">
            <div class="search-wrap">
                <input type="text" id="searchInput" placeholder="Поиск терминов..." />
                <button class="clear-btn" id="clearSearch" title="Очистить">✕</button>
            </div>
            <button class="reset-btn" id="resetFiltersBtn" title="Сбросить фильтры">Сбросить</button>
            
            <button class="burger-btn" id="burgerBtn" aria-label="Меню фильтров">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div class="filter-group" id="filterGroup">
                <button class="filter-btn active" data-filter="all">Все</button>
                <button class="filter-btn" data-filter="theory">Теория</button>

                <div class="dropdown">
                    <button class="filter-btn dropdown-toggle" id="dropdownToggle">
                        Схема тестирования <span class="arrow">▼</span>
                    </button>
                    <div class="dropdown-menu" id="dropdownMenu">
                        <button class="dropdown-item" data-filter="formal">Формализация</button>
                        <button class="dropdown-item" data-filter="scenario">Сценарии</button>
                        <button class="dropdown-item" data-filter="methods">Методы</button>
                        <button class="dropdown-item" data-filter="levels">Уровни</button>
                        <button class="dropdown-item" data-filter="functional">Функциональное</button>
                        <button class="dropdown-item" data-filter="nonfunctional">Нефункциональное</button>
                    </div>
                </div>

                <button class="filter-btn" data-filter="documentation">Тест. документация</button>
                <button class="filter-btn" data-filter="api">API</button>
                <button class="filter-btn" data-filter="web">Веб-приложения</button>
                <button class="filter-btn" data-filter="testdesign">Тест-дизайн</button>
                <button class="filter-btn" data-filter="kanban">Kanban</button>
                <button class="filter-btn" data-filter="scrum">Scrum</button>
                <button class="filter-btn" data-filter="requirements">Требования</button>

                <div class="dropdown">
                    <button class="filter-btn dropdown-toggle" id="dropdownToggleSql">
                        SQL <span class="arrow">▼</span>
                    </button>
                    <div class="dropdown-menu" id="dropdownMenuSql">
                        <button class="dropdown-item" data-filter="sql_basics">Основы SQL</button>
                        <button class="dropdown-item" data-filter="sql_filter">Фильтрация и сортировка</button>
                        <button class="dropdown-item" data-filter="sql_aggregate">Агрегация (GROUP BY, HAVING)</button>
                        <button class="dropdown-item" data-filter="sql_join">JOIN</button>
                        <button class="dropdown-item" data-filter="sql_subquery">Подзапросы</button>
                        <button class="dropdown-item" data-filter="sql_window">Оконные функции</button>
                        <button class="dropdown-item" data-filter="sql_ddl">DDL (CREATE, ALTER, DROP)</button>
                        <button class="dropdown-item" data-filter="sql_dml">DML (INSERT, UPDATE, DELETE)</button>
                        <button class="dropdown-item" data-filter="sql_null">NULL</button>
                        <button class="dropdown-item" data-filter="sql_view">Представления (VIEW)</button>
                        <button class="dropdown-item" data-filter="sql_index">Индексы и оптимизация</button>
                        <button class="dropdown-item" data-filter="sql_interview">Вопросы для собеседования</button>
                    </div>
                </div>

                <div class="dropdown">
                    <button class="filter-btn dropdown-toggle" id="dropdownTogglePython">
                        Python <span class="arrow">▼</span>
                    </button>
                    <div class="dropdown-menu" id="dropdownMenuPython">
                        <button class="dropdown-item" data-filter="python_variables">Переменные и типы данных</button>
                        <button class="dropdown-item" data-filter="python_structures">Структуры данных</button>
                        <button class="dropdown-item" data-filter="python_io">Ввод и вывод данных</button>
                        <button class="dropdown-item" data-filter="python_conditions">Условные операторы</button>
                        <button class="dropdown-item" data-filter="python_loops">Циклы</button>
                        <button class="dropdown-item" data-filter="python_functions">Функции</button>
                        <button class="dropdown-item" data-filter="python_algorithms">Структуры данных и алгоритмы</button>
                        <button class="dropdown-item" data-filter="python_files">Работа с файлами</button>
                        <button class="dropdown-item" data-filter="python_requests">Модуль requests</button>
                        <button class="dropdown-item" data-filter="python_pandas">Модуль pandas</button>
                        <button class="dropdown-item" data-filter="python_db">Работа с БД</button>
                        <button class="dropdown-item" data-filter="python_interview">Вопросы для собеседования</button>
                    </div>
                </div>
            </div>

            <div class="stats">Показано: <strong id="visibleCount">0</strong> / <strong id="totalCount">0</strong></div>
        </div>

        <div class="section-title">Справочник терминов</div>
        <div class="grid-cards" id="cardsGrid"></div>
         <!-- ===== БЛОК ИТОГОВ ПОСЛЕ СВАЙПА ===== -->
        <div id="swipeSummary" style="display: none; margin-top: 20px; background: white; border-radius: 20px; padding: 25px; box-shadow: 0 8px 32px rgba(0,0,0,0.05);">
            <h3 style="text-align:center; color: #0a1929; margin-bottom: 20px;">Итоги изучения</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                <div id="knownList" style="flex: 1; min-width: 280px; background: #e8f5e9; border-left: 4px solid #2e7d32; padding: 20px; border-radius: 12px;"></div>
                <div id="unknownList" style="flex: 1; min-width: 280px; background: #fce4ec; border-left: 4px solid #c62828; padding: 20px; border-radius: 12px;"></div>
            </div>
            <button class="btn-reset-section" onclick="resetCurrentFilterStatsAndRefresh();">
                Сбросить и продолжить
            </button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
