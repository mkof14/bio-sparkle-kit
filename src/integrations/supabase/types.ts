export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analytics_metrics: {
        Row: {
          active_users: number | null
          ai_requests: number | null
          avg_session_duration: number | null
          bounce_rate: number | null
          churn_rate: number | null
          conversion_rate: number | null
          created_at: string
          daily_revenue: number | null
          id: string
          metric_date: string
          new_users: number | null
          reports_generated: number | null
        }
        Insert: {
          active_users?: number | null
          ai_requests?: number | null
          avg_session_duration?: number | null
          bounce_rate?: number | null
          churn_rate?: number | null
          conversion_rate?: number | null
          created_at?: string
          daily_revenue?: number | null
          id?: string
          metric_date?: string
          new_users?: number | null
          reports_generated?: number | null
        }
        Update: {
          active_users?: number | null
          ai_requests?: number | null
          avg_session_duration?: number | null
          bounce_rate?: number | null
          churn_rate?: number | null
          conversion_rate?: number | null
          created_at?: string
          daily_revenue?: number | null
          id?: string
          metric_date?: string
          new_users?: number | null
          reports_generated?: number | null
        }
        Relationships: []
      }
      banners: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          image_url: string
          is_active: boolean | null
          link_url: string | null
          position: string
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image_url: string
          is_active?: boolean | null
          link_url?: string | null
          position: string
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          link_url?: string | null
          position?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string | null
          created_by: string | null
          date: string
          excerpt: string
          id: string
          image_url: string | null
          is_published: boolean | null
          tags: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          category: string
          content: string
          created_at?: string | null
          created_by?: string | null
          date?: string
          excerpt: string
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          tags?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string | null
          created_by?: string | null
          date?: string
          excerpt?: string
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          tags?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      connected_devices: {
        Row: {
          brand: string | null
          created_at: string
          device_name: string
          device_type: string
          id: string
          is_active: boolean | null
          last_sync: string | null
          user_id: string
        }
        Insert: {
          brand?: string | null
          created_at?: string
          device_name: string
          device_type: string
          id?: string
          is_active?: boolean | null
          last_sync?: string | null
          user_id: string
        }
        Update: {
          brand?: string | null
          created_at?: string
          device_name?: string
          device_type?: string
          id?: string
          is_active?: boolean | null
          last_sync?: string | null
          user_id?: string
        }
        Relationships: []
      }
      documents: {
        Row: {
          category: Database["public"]["Enums"]["document_category"]
          content: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          file_url: string | null
          id: string
          is_published: boolean | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: Database["public"]["Enums"]["document_category"]
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          file_url?: string | null
          id?: string
          is_published?: boolean | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["document_category"]
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          file_url?: string | null
          id?: string
          is_published?: boolean | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          category: string
          created_at: string | null
          created_by: string | null
          html_content: string
          id: string
          is_active: boolean | null
          name: string
          subject: string
          updated_at: string | null
          variables: Json | null
        }
        Insert: {
          category: string
          created_at?: string | null
          created_by?: string | null
          html_content: string
          id?: string
          is_active?: boolean | null
          name: string
          subject: string
          updated_at?: string | null
          variables?: Json | null
        }
        Update: {
          category?: string
          created_at?: string | null
          created_by?: string | null
          html_content?: string
          id?: string
          is_active?: boolean | null
          name?: string
          subject?: string
          updated_at?: string | null
          variables?: Json | null
        }
        Relationships: []
      }
      health_comparisons: {
        Row: {
          compared_with_user_id: string
          comparison_type: string
          created_at: string
          id: string
          insights: Json | null
          metrics_compared: Json | null
          user_id: string
        }
        Insert: {
          compared_with_user_id: string
          comparison_type: string
          created_at?: string
          id?: string
          insights?: Json | null
          metrics_compared?: Json | null
          user_id: string
        }
        Update: {
          compared_with_user_id?: string
          comparison_type?: string
          created_at?: string
          id?: string
          insights?: Json | null
          metrics_compared?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      health_metrics: {
        Row: {
          device_id: string | null
          id: string
          metric_type: string
          recorded_at: string
          unit: string
          user_id: string
          value: number
        }
        Insert: {
          device_id?: string | null
          id?: string
          metric_type: string
          recorded_at?: string
          unit: string
          user_id: string
          value: number
        }
        Update: {
          device_id?: string | null
          id?: string
          metric_type?: string
          recorded_at?: string
          unit?: string
          user_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "health_metrics_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "connected_devices"
            referencedColumns: ["id"]
          },
        ]
      }
      job_posts: {
        Row: {
          created_at: string | null
          created_by: string | null
          department: string
          description: string
          id: string
          is_active: boolean | null
          location: string
          requirements: Json | null
          salary_range: string | null
          title: string
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          department: string
          description: string
          id?: string
          is_active?: boolean | null
          location: string
          requirements?: Json | null
          salary_range?: string | null
          title: string
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          department?: string
          description?: string
          id?: string
          is_active?: boolean | null
          location?: string
          requirements?: Json | null
          salary_range?: string | null
          title?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      learning_materials: {
        Row: {
          category: string
          content_url: string
          created_at: string | null
          created_by: string | null
          description: string | null
          duration: number | null
          id: string
          is_published: boolean | null
          material_type: string
          order_index: number | null
          tags: Json | null
          thumbnail_url: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content_url: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          is_published?: boolean | null
          material_type: string
          order_index?: number | null
          tags?: Json | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content_url?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: number | null
          id?: string
          is_published?: boolean | null
          material_type?: string
          order_index?: number | null
          tags?: Json | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      medical_files: {
        Row: {
          category: string
          description: string | null
          file_name: string
          file_size: number
          file_type: string
          id: string
          storage_path: string
          updated_at: string
          uploaded_at: string
          user_id: string
        }
        Insert: {
          category: string
          description?: string | null
          file_name: string
          file_size: number
          file_type: string
          id?: string
          storage_path: string
          updated_at?: string
          uploaded_at?: string
          user_id: string
        }
        Update: {
          category?: string
          description?: string | null
          file_name?: string
          file_size?: number
          file_type?: string
          id?: string
          storage_path?: string
          updated_at?: string
          uploaded_at?: string
          user_id?: string
        }
        Relationships: []
      }
      model_updates: {
        Row: {
          created_at: string
          data_source: string | null
          description: string
          id: string
          impact_score: number | null
          metrics_affected: Json | null
          update_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data_source?: string | null
          description: string
          id?: string
          impact_score?: number | null
          metrics_affected?: Json | null
          update_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          data_source?: string | null
          description?: string
          id?: string
          impact_score?: number | null
          metrics_affected?: Json | null
          update_type?: string
          user_id?: string
        }
        Relationships: []
      }
      news_posts: {
        Row: {
          category: string
          content: string
          created_at: string | null
          created_by: string | null
          date: string
          excerpt: string
          id: string
          image_url: string | null
          is_published: boolean | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          created_by?: string | null
          date?: string
          excerpt: string
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          created_by?: string | null
          date?: string
          excerpt?: string
          id?: string
          image_url?: string | null
          is_published?: boolean | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          frequency: string
          id: string
          is_enabled: boolean | null
          message: string | null
          notification_type: string
          time_of_day: string | null
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string
          frequency: string
          id?: string
          is_enabled?: boolean | null
          message?: string | null
          notification_type: string
          time_of_day?: string | null
          title: string
          user_id: string
        }
        Update: {
          created_at?: string
          frequency?: string
          id?: string
          is_enabled?: boolean | null
          message?: string | null
          notification_type?: string
          time_of_day?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      partner_inquiries: {
        Row: {
          company_name: string | null
          contact_name: string
          created_at: string | null
          email: string
          id: string
          inquiry_type: string
          message: string
          phone: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          company_name?: string | null
          contact_name: string
          created_at?: string | null
          email: string
          id?: string
          inquiry_type: string
          message: string
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          company_name?: string | null
          contact_name?: string
          created_at?: string | null
          email?: string
          id?: string
          inquiry_type?: string
          message?: string
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_history: {
        Row: {
          amount: number
          created_at: string | null
          currency: string
          failure_reason: string | null
          id: string
          status: string
          stripe_invoice_id: string | null
          stripe_payment_intent_id: string | null
          subscription_id: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string
          failure_reason?: string | null
          id?: string
          status: string
          stripe_invoice_id?: string | null
          stripe_payment_intent_id?: string | null
          subscription_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string
          failure_reason?: string | null
          id?: string
          status?: string
          stripe_invoice_id?: string | null
          stripe_payment_intent_id?: string | null
          subscription_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_history_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_settings: {
        Row: {
          key: string
          updated_at: string
          updated_by: string | null
          value: string
        }
        Insert: {
          key: string
          updated_at?: string
          updated_by?: string | null
          value: string
        }
        Update: {
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      questionnaire_responses: {
        Row: {
          completed_at: string
          created_at: string
          id: string
          language: string
          questionnaire_id: string
          responses: Json
          user_id: string
        }
        Insert: {
          completed_at?: string
          created_at?: string
          id?: string
          language?: string
          questionnaire_id: string
          responses: Json
          user_id: string
        }
        Update: {
          completed_at?: string
          created_at?: string
          id?: string
          language?: string
          questionnaire_id?: string
          responses?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "questionnaire_responses_questionnaire_id_fkey"
            columns: ["questionnaire_id"]
            isOneToOne: false
            referencedRelation: "questionnaires"
            referencedColumns: ["id"]
          },
        ]
      }
      questionnaires: {
        Row: {
          category: string
          created_at: string
          description_key: string
          id: string
          is_active: boolean | null
          order_index: number
          required_plan: string
          title_key: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description_key: string
          id?: string
          is_active?: boolean | null
          order_index?: number
          required_plan?: string
          title_key: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description_key?: string
          id?: string
          is_active?: boolean | null
          order_index?: number
          required_plan?: string
          title_key?: string
          updated_at?: string
        }
        Relationships: []
      }
      questions: {
        Row: {
          created_at: string
          depends_on: Json | null
          id: string
          is_required: boolean | null
          options: Json | null
          order_index: number
          question_key: string
          question_type: string
          questionnaire_id: string
          validation: Json | null
        }
        Insert: {
          created_at?: string
          depends_on?: Json | null
          id?: string
          is_required?: boolean | null
          options?: Json | null
          order_index?: number
          question_key: string
          question_type: string
          questionnaire_id: string
          validation?: Json | null
        }
        Update: {
          created_at?: string
          depends_on?: Json | null
          id?: string
          is_required?: boolean | null
          options?: Json | null
          order_index?: number
          question_key?: string
          question_type?: string
          questionnaire_id?: string
          validation?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "questions_questionnaire_id_fkey"
            columns: ["questionnaire_id"]
            isOneToOne: false
            referencedRelation: "questionnaires"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string | null
          id: string
          is_active: boolean | null
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      referral_credits: {
        Row: {
          amount: number
          applied_at: string | null
          created_at: string | null
          credit_type: string
          expires_at: string | null
          id: string
          referral_id: string
          status: string
          user_id: string
        }
        Insert: {
          amount: number
          applied_at?: string | null
          created_at?: string | null
          credit_type: string
          expires_at?: string | null
          id?: string
          referral_id: string
          status?: string
          user_id: string
        }
        Update: {
          amount?: number
          applied_at?: string | null
          created_at?: string | null
          credit_type?: string
          expires_at?: string | null
          id?: string
          referral_id?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "referral_credits_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          converted_at: string | null
          created_at: string | null
          email: string
          id: string
          referral_code: string
          referred_user_id: string | null
          referrer_id: string
          status: string
        }
        Insert: {
          converted_at?: string | null
          created_at?: string | null
          email: string
          id?: string
          referral_code: string
          referred_user_id?: string | null
          referrer_id: string
          status?: string
        }
        Update: {
          converted_at?: string | null
          created_at?: string | null
          email?: string
          id?: string
          referral_code?: string
          referred_user_id?: string | null
          referrer_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_referral_code"
            columns: ["referral_code"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["code"]
          },
        ]
      }
      reports: {
        Row: {
          content: Json
          generated_at: string
          id: string
          plan_type: string
          report_type: string
          title: string
          user_id: string
        }
        Insert: {
          content: Json
          generated_at?: string
          id?: string
          plan_type?: string
          report_type: string
          title: string
          user_id: string
        }
        Update: {
          content?: Json
          generated_at?: string
          id?: string
          plan_type?: string
          report_type?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      social_media_links: {
        Row: {
          icon_name: string
          id: string
          is_active: boolean | null
          order_index: number | null
          platform: string
          updated_at: string | null
          updated_by: string | null
          url: string
        }
        Insert: {
          icon_name: string
          id?: string
          is_active?: boolean | null
          order_index?: number | null
          platform: string
          updated_at?: string | null
          updated_by?: string | null
          url: string
        }
        Update: {
          icon_name?: string
          id?: string
          is_active?: boolean | null
          order_index?: number | null
          platform?: string
          updated_at?: string | null
          updated_by?: string | null
          url?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created_at: string | null
          current_period_end: string
          current_period_start: string
          id: string
          price_id: string
          product_id: string
          status: string
          stripe_customer_id: string
          stripe_subscription_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created_at?: string | null
          current_period_end: string
          current_period_start: string
          id?: string
          price_id: string
          product_id: string
          status: string
          stripe_customer_id: string
          stripe_subscription_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created_at?: string | null
          current_period_end?: string
          current_period_start?: string
          id?: string
          price_id?: string
          product_id?: string
          status?: string
          stripe_customer_id?: string
          stripe_subscription_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      trial_subscriptions: {
        Row: {
          category_name: string
          created_at: string | null
          expires_at: string
          id: string
          is_active: boolean | null
          reminder_sent: boolean | null
          started_at: string
          trial_days: number
          user_id: string
        }
        Insert: {
          category_name?: string
          created_at?: string | null
          expires_at: string
          id?: string
          is_active?: boolean | null
          reminder_sent?: boolean | null
          started_at?: string
          trial_days?: number
          user_id: string
        }
        Update: {
          category_name?: string
          created_at?: string | null
          expires_at?: string
          id?: string
          is_active?: boolean | null
          reminder_sent?: boolean | null
          started_at?: string
          trial_days?: number
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          country: string | null
          created_at: string
          date_format: string
          id: string
          metric_system: string
          timezone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          country?: string | null
          created_at?: string
          date_format?: string
          id?: string
          metric_system?: string
          timezone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          country?: string | null
          created_at?: string
          date_format?: string
          id?: string
          metric_system?: string
          timezone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_service_categories: {
        Row: {
          category_id: string
          category_name: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          category_id: string
          category_name: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          category_id?: string
          category_name?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      wearable_integrations: {
        Row: {
          created_at: string
          data_types: Json | null
          device_name: string | null
          id: string
          is_connected: boolean | null
          last_sync: string | null
          provider: string
          sync_frequency: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          data_types?: Json | null
          device_name?: string | null
          id?: string
          is_connected?: boolean | null
          last_sync?: string | null
          provider: string
          sync_frequency?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          data_types?: Json | null
          device_name?: string | null
          id?: string
          is_connected?: boolean | null
          last_sync?: string | null
          provider?: string
          sync_frequency?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user" | "super_admin"
      document_category:
        | "marketing"
        | "presentation"
        | "educational"
        | "legal"
        | "business"
        | "informational"
        | "administrative"
        | "technical"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user", "super_admin"],
      document_category: [
        "marketing",
        "presentation",
        "educational",
        "legal",
        "business",
        "informational",
        "administrative",
        "technical",
      ],
    },
  },
} as const
