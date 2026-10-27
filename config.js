// ============================================================
// ملف الإعدادات - هذا هو الملف الوحيد الذي تعدّل فيه بياناتك
// لا يتغير مع أي تحديث لـ index.html، فلا تحتاج إعادة إدخال المفاتيح أبداً
// ============================================================
window.APP_CONFIG = {
  // --- الاتصال بقاعدة البيانات (Supabase: Project Settings > API) ---
  SUPABASE_URL: 'https://eiaupsizfxtbksctdbyo.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpYXVwc2l6Znh0YmtzY3RkYnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1OTk2MjQsImV4cCI6MjEwNTE3NTYyNH0.q9UjIxCQmhqEPoX6oT7CWuI1za6lQvB-skoD7uM0rBs',
  ADMIN_EMAIL: 'admin@equipment-system.local',

  // --- إشعارات البريد الإلكتروني (EmailJS) ---
  // المفتاح العام: EmailJS > Account > General > Public Key
  EMAILJS_PUBLIC_KEY: 'hz365H8KjhaUSCuX7',
  EMAILJS_SERVICE_ID: 'service_4nicw1x',
  EMAILJS_TEMPLATE_ID: 'template_62vbi5d',
  EMAIL_MONTHLY_LIMIT: 200,   // حد الخطة المجانية الشهري (لعرض العداد فقط)

  // إيميلات الإدارة التي تصلها التنبيهات (أضف أو احذف كما تشاء)
  ADMIN_NOTIFY_EMAILS: ['ashraif8@gmail.com', 'ahmed.mohsen@siac-construction.com', 'Ehab.sadek@siac-construction.com']
};
